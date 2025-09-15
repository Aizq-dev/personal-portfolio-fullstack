

import { useEffect, useMemo, useState } from "react";
import { useAppData } from "../../context/AppDataContext";

type BackdropStyle = "blur" | "dim" | "solid";

type ModalLoaderProps = {

  error?: boolean;
  onRetry?: () => void;
  onLite?: () => void;
  showElapsed?: boolean;      // muestra "Tiempo/Elapsed"
  actionDelayMs?: number;     // cuándo mostrar acciones (por defecto 15s)
  backdrop?: BackdropStyle;   // "blur" | "dim" | "solid"
};

export const Loader: React.FC<ModalLoaderProps> = ({
  
  error = false,
  onRetry,
  showElapsed = true,
  actionDelayMs = 2000,
  backdrop = "blur",
}) => {
  const [elapsedMs, setElapsedMs] = useState(0);
const {profile}= useAppData()
const [open , setOpen]=useState(true)
  // Cronómetro
useEffect(() => {
   if (profile)setOpen(false)
    if (!open) {
      setElapsedMs(0);
      return;
    }
    const start = performance.now();
    const id = setInterval(() => setElapsedMs(performance.now() - start), 250);
    return () => clearInterval(id);
  }, [ open, profile]);

  
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const s = Math.floor(elapsedMs / 1000);

  // Mensajes bilingües por tramos
  const message = useMemo(() => {
    if (error)
      return "No hemos podido cargar el contenido. Reintentar / We couldn’t load the content. Retry ";
    if (s < 3) return "Cargando… / Loading…";
    if (s < 8)
      return "Despertando el servidor (la primera carga puede tardar) / Warming up the server (first load may take a moment)…";
    if (s < 15) return "Ya casi está… / Almost there…";
    return "Está tardando más de lo normal. Reintentar / Taking longer than usual. Retry ";
  }, [s, error]);

  const showActions = error || elapsedMs >= actionDelayMs;

  if (!open) return null;

  // Backdrop styles
  const backdropClass =
    backdrop === "solid"
      ? "bg-white"
      : backdrop === "dim"
      ? "bg-black/50"
      : "backdrop-blur-sm bg-black/10"; // blur por defecto

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center"
      aria-live="polite"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div className={`absolute inset-0 ${backdropClass} transition-opacity`} />

      {/* Card */}
      <div className="relative mx-4 w-full max-w-md rounded-2xl border border-gray-200/60 bg-white/95 shadow-xl p-6 text-center space-y-4 animate-in fade-in zoom-in duration-200">
        {/* Spinner */}
        <div className="mx-auto h-10 w-10 rounded-full border-2 border-gray-300 border-t-transparent animate-spin" />

        {/* Mensaje */}
        <p className="text-sm text-gray-800 leading-relaxed">{message}</p>

        {/* Tiempo transcurrido */}
        {showElapsed && (
          <p className="text-xs text-gray-500">
            Tiempo transcurrido: {s} s / Elapsed time: {s} s
          </p>
        )}

        {/* Acciones */}
        {showActions && (onRetry ) && (
          <div className="flex items-center justify-center gap-3 pt-2">
            {onRetry && (
              <button
                type="button"
                onClick={onRetry}
                className="px-3 py-2 text-sm rounded-xl border border-gray-300 hover:bg-gray-50 active:scale-[0.98] transition"
              >
                Reintentar / Retry
              </button>
            )}
           
          </div>
        )}

        {/* Nota inferior */}
        {!error && (
          <p className="text-[11px] text-gray-400 pt-1">
            Si es tu primera visita tras un rato sin actividad, puede tardar un poco más /
            On your first visit after inactivity, it may take a bit longer
          </p>
        )}
      </div>
    </div>
  );
};
