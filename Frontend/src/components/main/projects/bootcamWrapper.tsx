import type { IProject } from "../../../types/types";
import { SectionByStack } from "./SectionByStack";

export function BootcampProjects({ all }: { all: IProject[] }) {
  const bootcamp = all.filter((p) => p.origin === "bootcamp");
  return <SectionByStack title="Bootcamp" projects={bootcamp} id="bootcamp" />;
}
