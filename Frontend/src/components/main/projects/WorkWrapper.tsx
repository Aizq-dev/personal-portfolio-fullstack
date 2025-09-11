import { useI18n } from "../../../hooks/usei18n";
import type { IProject } from "../../../types/types";
import { SectionByStack } from "./SectionByStack";

export function WorkExperience({ all }: { all: IProject[] }) {
  const work = all.filter((p) => p.origin === "professional");
  const { t } = useI18n();
  return (
    <SectionByStack
      title={t("section_experience")}
      projects={work}
      labels={{
        fullstack: "Fullstack ",
        frontend: "Frontend ",
        backend: "Backend",
      }}
      id="workXP"
    />
  );
}
