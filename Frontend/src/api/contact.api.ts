
import { client } from "./client";
import type { ContactFormValues, Locale } from "../types/types";


export async function sendContact(payload: ContactFormValues & { lang?: Locale; source?: string }) {
  try {
    const { data } = await client.post("/contact", payload);
    return data;
  } catch (err) {
    console.error("Error enviando contacto", err);
    return null;
  }
}
