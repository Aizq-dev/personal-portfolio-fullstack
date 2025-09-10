// ContactDialog.tsx
import { useEffect, useRef } from "react";
import type {  FormEvent } from "react";
import { Dialog } from "../dialog/Dialog";
import type { ContactFormValues } from "../../types/types";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: ContactFormValues) => Promise<void> | void; // ⬅️ obligatorio
  title?: string;
};

export function ContactDialog({ open, onClose, onSubmit, title = "Contactar" }: Props) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const firstRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (open) firstRef.current?.focus();
  }, [open]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;

    // honeypot
    if (data.website?.trim()) { onClose(); return; }

    const payload: ContactFormValues = {
      name: (data.name ?? "").toString().trim(),
      company: (data.company ?? "").toString().trim(),
      phone: (data.phone ?? "").toString().trim(),
      email: (data.email ?? "").toString().trim(),
      message: (data.message ?? "").toString().trim(),
      website: (data.website ?? "").toString(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      alert("Por favor, completa nombre, email y mensaje.");
      return;
    }

    await onSubmit(payload);   // ⬅️ solo el padre hace la API
    onClose();
    formRef.current?.reset();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={title}
      description="Rellena el formulario y te responderé lo antes posible."
    >
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-text-light">Nombre *</label>
            <Input ref={firstRef} name="name" autoComplete="name" required placeholder="Tu nombre" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-text-light">
              Empresa <span className="text-text-muted">(opcional)</span>
            </label>
            <Input name="company" autoComplete="organization" placeholder="Tu empresa" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-text-light">
              Teléfono <span className="text-text-muted">(opcional)</span>
            </label>
            <Input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+34 600 000 000" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-text-light">Email *</label>
            <Input name="email" type="email" autoComplete="email" required placeholder="tu@email.com" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-text-light">Mensaje *</label>
          <Textarea name="message" rows={5} required placeholder="Cuéntame en qué puedo ayudarte…" />
        </div>

        {/* Honeypot (oculto) */}
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="flex items-center justify-end gap-3 pt-2">
          <Button type="button" variant="secondary" onClick={onClose}>Cancelar</Button>
          <Button type="submit">Enviar</Button>
        </div>
      </form>
    </Dialog>
  );
}
