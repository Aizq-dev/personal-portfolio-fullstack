import { useI18n } from "../../../hooks/usei18n"




export const ButtonCV =()=>{
const {t,lang}=useI18n()
    return <>
    <a
  href={lang === "es"? "/CV Adrian 2025.pdf" : "/CV Adrian 2025 EN.pdf"}
  download="CV Adrian Izquierdo.pdf"

  className="inline-block px-3 py-1 ml-3 bg-blue-600 text-white font-medium rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
>
  {t("dowload_cv")}
</a>
    </>
}

