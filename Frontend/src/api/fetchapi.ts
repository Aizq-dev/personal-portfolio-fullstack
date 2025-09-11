import axios from "axios";
const api = import.meta.env.VITE_API_URL;

export async function fetchData<T>(
  route: string,
): Promise<T | null> {
  try {
    const { data } = await axios.get<T>(`${api}/${route}`);
    return data;
  } catch (e) {
    console.error(`Error fetching ${route}`, e);
    return null;
  }
}
