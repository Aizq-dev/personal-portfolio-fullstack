// src/utils/CursorHighlight.tsx
import { useEffect, useRef } from "react";
import type { Props } from "../types/types";



export default function CursorHighlight({
  size = 600,
  color = "rgba(13, 148, 136, 0.15)", // teal 600 @ 15%
  target = null,
  className = "",
}: Props) {
  const glowRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    // window o el contenedor que pases
    const el: (Window & typeof globalThis) | HTMLElement =
      target instanceof HTMLElement ? target : window;

    const onMove = (e: MouseEvent) => {
      if (!glowRef.current) return;

      const rect =
        target instanceof HTMLElement ? target.getBoundingClientRect() : null;

      const x = rect ? e.clientX - rect.left : e.clientX;
      const y = rect ? e.clientY - rect.top : e.clientY;

      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        glowRef.current!.style.setProperty("--x", `${x}px`);
        glowRef.current!.style.setProperty("--y", `${y}px`);
      });
    };

    // ambos (Window y HTMLElement) tienen addEventListener con el mismo tipo
    el.addEventListener("mousemove", onMove as EventListener);

    return () => {
      el.removeEventListener("mousemove", onMove as EventListener);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [target]);

  const style: React.CSSProperties = {
    background: `radial-gradient(${size}px at var(--x) var(--y), ${color}, transparent 80%)`,
  };

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className={
        "pointer-events-none fixed inset-0 z-30 transition-opacity duration-300  " +
        className
      }
      style={style}
    />
  );
}
