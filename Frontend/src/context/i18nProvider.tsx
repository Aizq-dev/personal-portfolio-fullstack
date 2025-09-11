import {  useState } from "react";
import type { Locale } from "../types/types";
import { DICT, type I18nKey } from "../i18n/dict";
import { I18nContext } from "./i18n";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Locale>("es");

  const t = (k: I18nKey, vars: Record<string, string> = {}) => {
    const str = DICT[lang][k] ?? DICT.es[k] ?? String(k);
    return str.replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? `{${key}}`);
  };

  const value = { lang, setLang, t };
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

