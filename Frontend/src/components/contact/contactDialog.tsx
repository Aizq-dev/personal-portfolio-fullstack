// ContactDialog.tsx
import { useEffect, useRef } from "react";
import type { FormEvent } from "react";
import { Dialog } from "./dialog/Dialog";
import type { ContactFormValues } from "../../types/types";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";
import { useI18n } from "../../hooks/usei18n";

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: ( data: ContactFormValues) => Promise<void> | void;
};

export function ContactDialog({ open, onClose, onSubmit }: Props) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const firstRef = useRef<HTMLInputElement | null>(null);
  const { t } = useI18n();

  const onPhoneInput: React.FormEventHandler<HTMLInputElement> = (e) => {
    const input = e.currentTarget;
    let v = input.value;

    v = v.replace(/[^\d+]/g, "");

    const hadPlus = v.includes("+");
    v = v.replace(/\+/g, "");
    if (hadPlus) v = "+" + v;

    const digits = v.startsWith("+") ? v.slice(1) : v;
    if (digits.length > 15) {
      v = (v.startsWith("+") ? "+" : "") + digits.slice(0, 15);
    }

    input.value = v;
  };

  useEffect(() => {
    if (open) firstRef.current?.focus();
  }, [open]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;

    // honeypot
    if (data.website?.trim()) {
      onClose();
      return;
    }

    const payload: ContactFormValues = {
      name: (data.name ?? "").toString().trim(),
      company: (data.company ?? "").toString().trim(),
      phone: (data.phone ?? "").toString().trim(),
      email: (data.email ?? "").toString().trim(),
      message: (data.message ?? "").toString().trim(),
      website: (data.website ?? "").toString(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      alert(t("msg_required"));
      return;
    }

    await onSubmit(payload); // solo el padre hace la API
    onClose();
    formRef.current?.reset();
  };

  const dialogTitle = t("contact_title");
  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={dialogTitle}
      description={t("contact_subtitle")}
    >
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-text-light">
              {t("form_name")} *
            </label>
            <Input
              ref={firstRef}
              name="name"
              autoComplete="name"
              required
              placeholder={t("ph_name")}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-text-light">
              {t("form_company")}{" "}
              <span className="text-text-muted">({t("form_optional")})</span>
            </label>
            <Input
              name="company"
              autoComplete="organization"
              placeholder={t("ph_company")}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-text-light">
              {t("form_phone")}{" "}
              <span className="text-text-muted">({t("form_optional")})</span>
            </label>
            <Input
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder={t("ph_phone")}
              onInput={onPhoneInput}
              pattern="^\+?\d{7,15}$"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-text-light">
              {t("form_email")} *
            </label>
            <Input
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder={t("ph_email")}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-text-light">
            {t("form_message")} *
          </label>
          <Textarea
            name="message"
            rows={5}
            required
            placeholder={t("ph_message")}
          />
        </div>

        {/* Honeypot (oculto) */}
        <input
          type="text"
          name="website"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="flex items-center justify-end gap-3 pt-2">
          <Button type="button" variant="secondary" onClick={onClose}>
            {t("btn_cancel")}
          </Button>
          <Button type="submit">{t("btn_send")}</Button>
        </div>
      </form>
    </Dialog>
  );
}
