// Page.tsx
import { useState } from "react";
import { ContactDialog } from "./contactDialog"; // tu modal
import { sendContact } from "./contact.api";


export default function Page() {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        disabled={sending}
        className="rounded-xl px-4 py-2 bg-black text-white dark:bg-white dark:text-black disabled:opacity-60"
      >
        Contacto
      </button>

      <ContactDialog
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={async (data) => {
          try {
            setSending(true);
            const res = await sendContact({ ...data,});
            if (!res) {
              alert("No se pudo enviar. Inténtalo de nuevo.");
            }
            
          } catch (e) {
            console.error(e);
            alert("Error al enviar el formulario.");
          } finally {
            setSending(false);
          }
        }}
      />
    </>
  );
}
