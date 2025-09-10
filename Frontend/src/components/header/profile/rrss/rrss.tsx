// Rrss.tsx
import { useState, useCallback } from "react";
import { Icons } from "./icons";
import type { RrssItem, ContactFormValues } from "../../../../types/types";
import { useAppData } from "../../../../hooks/useAppData";
import { ContactDialog } from "../../../contact/contactDialog";
import { sendContact } from "../../../contact/contact.api";

export const Rrss = () => {
  const { profile } = useAppData();
  const [contactOpen, setContactOpen] = useState(false);

  const rrss = (profile?.links ?? []) as RrssItem[];

  const handleSubmit = useCallback(async (data: ContactFormValues) => {
    const ok = await sendContact(data);
    if (!ok) alert("No se pudo enviar. Inténtalo de nuevo.");
  }, []);

  return (
    <>
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        {rrss.map((item) => {
          const Icon = Icons[item.icon];
          const href = item.url || "";
          const isEmailIcon =
            ["gmail", "email", "mail"].includes(item.icon) || href.startsWith("mailto:");
          const isExternal = href.startsWith("http");

          if (isEmailIcon) {
            // Fallback mailto (tu correo como destinatario) si el usuario hace Cmd/Ctrl/medio clic
            const fallbackEmail = profile?.links?.gmail?.email || "adrizq.dev@gmail.com";
            const subject = encodeURIComponent("Contacto desde el portfolio");
            const mailto = href && href.startsWith("mailto:")
              ? href
              : `mailto:${fallbackEmail}?subject=${subject}`;

            return (
              <li key={`${item.icon}-${href || "mailto"}`} className="mr-5 shrink-0 text-xs">
                <a
                  href={mailto}
                  aria-haspopup="dialog"
                  title="Email"
                  className="block hover:text-slate-200"
                  onClick={(e) => {
                    if (e.metaKey || e.ctrlKey || e.button === 1) return; // deja pasar mailto como plan B
                    e.preventDefault(); // click normal -> abre popup
                    setContactOpen(true);
                  }}
                >
                  <span className="sr-only">Email</span>
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </a>
              </li>
            );
          }

          // Resto de iconos
          return (
            <li key={`${item.icon}-${href}`} className="mr-5 shrink-0 text-xs">
              <a
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer noopener" : undefined}
                title={item.icon}
                className="block hover:text-slate-200"
              >
                <span className="sr-only">
                  {item.icon.charAt(0).toUpperCase() + item.icon.slice(1)}
                </span>
                <Icon className="h-6 w-6" aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ul>

      <ContactDialog
        open={contactOpen}
        onClose={() => setContactOpen(false)}
        onSubmit={handleSubmit} // solo el padre hace el POST
        title="Contactar"
      />
    </>
  );
};
