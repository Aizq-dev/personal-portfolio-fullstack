import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST!,               // smtp.gmail.com
  port: Number(process.env.SMTP_PORT || 587), // 587 con STARTTLS
  secure: false,                               // true solo si usas 465
  auth: {
    user: process.env.SMTP_USER!,              // adrizq.dev@gmail.com
    pass: process.env.SMTP_PASS!,              // App Password (16 chars)
  },
});

const MAIL_FROM = process.env.MAIL_FROM!;      // "Portfolio <adrizq.dev@gmail.com>"
const MAIL_TO   = process.env.MAIL_TO!;        // "adrizq.dev+portfolio@gmail.com"

type Contact = {
  name: string;
  email: string;
  message: string;
  company?: string;
  phone?: string;
};

export async function sendOwnerNotification(p: Contact) {
  await transporter.sendMail({
    from: MAIL_FROM,
    to: MAIL_TO,
    subject: `Nuevo mensaje: ${p.name}`,
    html: `
      <h2>Nuevo contacto</h2>
      <p><b>Nombre:</b> ${escape(p.name)}</p>
      ${p.company ? `<p><b>Empresa:</b> ${escape(p.company)}</p>` : ""}
      ${p.phone ? `<p><b>Teléfono:</b> ${escape(p.phone)}</p>` : ""}
      <p><b>Email:</b> ${escape(p.email)}</p>
      <p><b>Mensaje:</b></p>
      <pre style="white-space:pre-wrap">${escape(p.message)}</pre>
    `,
    replyTo: p.email, // responder escribe al remitente del formulario
  });
}

// auto-respuesta al visitante
export async function sendAutoReply(to: string, name: string) {
  await transporter.sendMail({
    from: MAIL_FROM,
    to,
    subject: "¡Gracias por tu mensaje!",
    text: `Hola ${name}, gracias por escribirme. Te responderé en breve.\n\n— Adri`,
  });
}

function escape(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;" }[c]!));
}
