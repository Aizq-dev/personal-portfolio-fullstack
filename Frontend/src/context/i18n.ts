import { createContext } from "react";
import {  type I18nKey, type Locale } from "../i18n/dict";

type Ctx = {
  lang: Locale;
  setLang: (l: Locale) => void;
  t: (k: I18nKey, vars?: Record<string, string>) => string;
};

export const I18nContext = createContext<Ctx | null>(null);



