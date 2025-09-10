import type { IProject } from "../../../types/types";
import { SectionByStack } from "./SectionByStack";


export function WorkExperience({ all }: { all: IProject[] }) {
  const work = all.filter((p) => p.origin === "professional");
  return (
    <SectionByStack
    
      title="Experiencia profesional"
      projects={work}
      labels={{ fullstack: "Fullstack (Trabajo)" }}// opcional
      id= "workXP"
    />
  );
}