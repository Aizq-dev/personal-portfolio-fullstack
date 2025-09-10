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


export async function sendOwnerNotification(p: {
  name: string; email: string; message: string; company?: string; phone?: string;
}) {
  const text = [
    `Nuevo contacto desde el portfolio`,
    ``,
    `Nombre:  ${p.name}`,
    p.company ? `Empresa: ${p.company}` : ``,
    p.phone   ? `Teléfono: ${p.phone}` : ``,
    `Email:   ${p.email}`,
    ``,
    `Mensaje:`,
    p.message,
  ].filter(Boolean).join("\n");

  const html = `
    <h2>Nuevo contacto</h2>
    <p><b>Nombre:</b> ${escapeHtml(p.name)}</p>
    ${p.company ? `<p><b>Empresa:</b> ${escapeHtml(p.company)}</p>` : ""}
    ${p.phone ? `<p><b>Teléfono:</b> ${escapeHtml(p.phone)}</p>` : ""}
    <p><b>Email:</b> ${escapeHtml(p.email)}</p>
    <p><b>Mensaje:</b></p>
    <pre style="white-space:pre-wrap">${escapeHtml(p.message)}</pre>
  `;

  const info = await transporter.sendMail({
    from: process.env.MAIL_FROM!,        // "Portfolio <adrizq.dev@gmail.com>"
    to: process.env.MAIL_TO!,            // adrizq.dev+portfolio@gmail.com
    subject: `Nuevo mensaje: ${p.name}`,
    text,
    html,
    replyTo: p.email,
  });
  console.log("[MAIL owner] accepted:", info.accepted, "rejected:", info.rejected);
}

// Auto-respuesta al visitante con headers útiles
export async function sendAutoReply(to: string, name: string) {
  const safeName = name?.trim() || "allí";
  const text = [
    `Hola ${safeName},`,
    `Gracias por tu mensaje. Lo he recibido correctamente y te responderé en breve.`,
    ``,
    `— Adrián`,
  ].join("\n");

  const html = `
    <p>Hola ${escapeHtml(safeName)},</p>
    <p>Gracias por tu mensaje. Lo he recibido correctamente y te responderé en breve.</p>
    <p>— Adrián</p>
  `;

  const info = await transporter.sendMail({
    from: process.env.MAIL_FROM!,
    to,
    subject: `Gracias, ${safeName} — he recibido tu mensaje`,
    text,                // ⬅️ parte texto
    html,                // ⬅️ parte HTML
    headers: {
      "Auto-Submitted": "auto-replied",
      "X-Auto-Response-Suppress": "All",
    },
  });
  console.log("[MAIL autoresponse] accepted:", info.accepted, "rejected:", info.rejected);
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;" }[c]!));
}
