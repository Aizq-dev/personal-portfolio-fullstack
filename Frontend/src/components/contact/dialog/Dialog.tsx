// src/components/dialog/Dialog.tsx
import React, { useEffect, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import { cn } from "../../../utils/cn";



type Props = {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  className?: string; // extra clases para el card
};

const OVERLAY =
  "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md";
const CARD =
  "relative w-full max-w-lg rounded-2xl shadow-2xl border bg-background-surface " +
  "text-text-light border-line/60 max-h-[85vh] overflow-y-auto";
const SECTION_BORDER = "border-b border-line/60";

export function Dialog({ open, onClose, title, description, children, className }: Props) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const portalRoot = useMemo(() => (typeof document !== "undefined" ? document.body : null), []);

  // Bloquear scroll + accesibilidad (ESC, focus trap)
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && dialogRef.current) {
        const nodes = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href],button,textarea,input,select,[tabindex]:not([tabindex="-1"])'
        );
        if (!nodes.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open || !portalRoot) return null;

  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <div className={OVERLAY} onMouseDown={handleBackdrop} aria-hidden={false}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        className={cn(CARD, className)}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {(title || description) && (
          <div className={cn("flex items-start justify-between gap-6 p-5", SECTION_BORDER)}>
            <div>
              {title && <h2 className="text-lg font-semibold">{title}</h2>}
              {description && <p className="mt-1 text-sm text-primary-300/90">{description}</p>}
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full
                         text-text-muted hover:text-primary-400 hover:bg-primary-600/10
                         focus:outline-none focus:ring-2 focus:ring-primary-400/40 focus:ring-offset-2
                         focus:ring-offset-background-dark"
            >
              ✕
            </button>
          </div>
        )}

        <div className="p-5">{children}</div>
      </div>
    </div>,
    portalRoot
  );
}
