import type { IProject } from "../../../types/types";
import { SectionByStack } from "./SectionByStack";

export function PersonalProjects({ all }: { all: IProject[] }) {
  const personal = all.filter((p) => p.origin === "personal");
  return (
    <SectionByStack
      title="Proyectos Personales"
      projects={personal}
      labels={{ fullstack: "Fullstack (Trabajo)", frontend: "Frontend " }} // opcional
      id="PersonalPJ"
    />
  );
}