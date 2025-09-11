import { useEffect, useState } from "react";
import type { AppData, IProfile, IProject } from "../types/types";
import { fetchData } from "../api/fetchapi";
import { AppDataContext } from "./AppDataContext";
import { useI18n } from "../hooks/usei18n";

export function AppDataProvider({ children }: { children: React.ReactNode }) {
  const {lang}=useI18n()

  const [profilesRaw, setProfilesRaw] = useState<IProfile[]>([]);
  const [projectsRaw, setProjectsRaw] = useState<IProject[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setError(null);
    setLoading(true);
    try {
      const [profileData, projectsData] = await Promise.all([
        fetchData<IProfile | IProfile[]>("profile"), // puede venir objeto o array
        fetchData<IProject[]>("projects"),
      ]);

      const profilesArr = Array.isArray(profileData)
        ? profileData
        : profileData
        ? [profileData]
        : [];

      setProfilesRaw(profilesArr);
      setProjectsRaw(projectsData ?? []);
    } catch (e) {
      console.error("AppData load error", e);
      setError("No se pudieron cargar los datos");
      setProfilesRaw([]);
      setProjectsRaw([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
  }, []);

  // --- derivar contenido según idioma  ---
  const profile: IProfile | null =
    profilesRaw.find((p) => p.locale === lang) ??
    profilesRaw.find((p) => p.locale === "es") ?? // fallback
    profilesRaw[0] ??
    null;

  const projects: IProject[] = (() => {
    const byLang = projectsRaw.filter((p) => p.locale === lang);
    if (byLang.length) return byLang;
    const es = projectsRaw.filter((p) => p.locale === "es");
    return es.length ? es : projectsRaw; // fallback
  })();

  const value: AppData = {
    profile,
    projects,
    loading,
    error,
    refresh: load,
    lang,
   
  };

  return (
    <AppDataContext.Provider value={value}>
      {children}
    </AppDataContext.Provider>
  );
}
