
import axios from "axios";
import type { ContactFormValues } from "../../types/types";

const api = import.meta.env.VITE_API_URL; // misma que usas en fetchData

export async function sendContact(payload: ContactFormValues) {
  try {
    const { data } = await axios.post(`${api}/contact/`, payload )

    return data; 
  } catch (err) {
    console.error("Error enviando contacto", err);
    return null;
  }
}
