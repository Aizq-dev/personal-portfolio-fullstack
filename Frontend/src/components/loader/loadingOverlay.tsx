type Props = { show: boolean; text?: string };

export function LoadingOverlay({ show, text = "Cargando…" }: Props) {
  return (
    <div
      aria-hidden={!show}
      className={[
        "fixed inset-0 z-50 flex items-center justify-center",
        "bg-black/40 backdrop-blur-sm",
        "transition-opacity duration-300",
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      ].join(" ")}
    >
      <div
        role="status"
        aria-live="polite"
        className="flex items-center gap-3 rounded-2xl px-5 py-4 shadow-xl
                   bg-white/80 dark:bg-neutral-900/80"
      >
        <span
          className="h-5 w-5 inline-block animate-spin rounded-full 
                     border-2 border-current border-t-transparent"
        />
        <span className="text-sm font-medium">{text}</span>
      </div>
    </div>
  );
}
