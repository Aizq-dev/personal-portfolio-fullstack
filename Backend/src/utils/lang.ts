export const getLang = (q: any): "es" | "en" =>
  String(q?.lang || "es").toLowerCase() === "en" ? "en" : "es";