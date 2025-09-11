import { useI18n } from "../../../hooks/usei18n";
import type { IProject } from "../../../types/types";
import { SectionByStack } from "./SectionByStack";

export function PersonalProjects({ all }: { all: IProject[] }) {
  const personal = all.filter((p) => p.origin === "personal");
  const { t } = useI18n();
  return (
    <SectionByStack
      title={t("section_personal_projects")}
      projects={personal}
      labels={{
        fullstack: "Fullstack ",
        frontend: "Frontend ",
        backend: "Backend",
      }}
      id="PersonalPJ"
    />
  );
}
