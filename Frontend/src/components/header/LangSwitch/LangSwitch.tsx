
import { useAppData } from "../../../context/AppDataContext";
import { useI18n } from "../../../hooks/usei18n";

export function LangSwitch() {
  const {  loading } = useAppData();
  const {lang, setLang}=useI18n();
  const next = lang === "es" ? "en" : "es";
  
  return (
    <button
      onClick={() => setLang(next)}
      disabled={loading}
      className="ml-3 rounded-xl border border-teal-500/40 px-3 py-1 text-sm disabled:opacity-60"
      title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      {lang === "es" ? "Switch to English" : "Cambiar a Español"}
    </button>
  );
}
