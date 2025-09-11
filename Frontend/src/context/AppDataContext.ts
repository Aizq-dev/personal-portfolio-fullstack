import { createContext, useContext } from "react";
import type { AppData} from "../types/types";

export const AppDataContext = createContext<AppData | null>(null);

export function useAppData() {
  const ctx = useContext(AppDataContext);
  if (!ctx) throw new Error("useAppData must be used within <AppDataProvider>");
  return ctx;
}
