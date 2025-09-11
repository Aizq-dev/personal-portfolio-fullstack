import { groupByStack } from "../../../lib/groupBy";
import type { SectionByStackProps, Stack } from "../../../types/types";
import { ProjectCard } from "../projectCard/projectCard";


export function SectionByStack({ title, projects, labels, id }: SectionByStackProps) {
  const by = groupByStack(projects);
  const defaultLabels: Record<Stack, string> = {
    fullstack: "Fullstack",
    frontend: "Frontend",
    backend: "Backend",
  };
  const L = { ...defaultLabels, ...labels };

  const ORDER: Stack[] = ["fullstack", "frontend", "backend"];

return (
  <section id={id} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
    {/* barra sticky móvil (opcional) */}
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
      <h2 className="text-md font-bold uppercase tracking-widest text-slate-200">{title}</h2>
    </div>

    <h1 className="pb-4 max-md:hidden">{title}</h1>

    {ORDER.map((stack) => {
      const list = by[stack];
      if (list.length === 0) return null;

      return (
        <section key={stack} className="mb-10">
          <h2 className="pb-6 text-lg font-semibold">{L[stack]}</h2>

          {/* 👇 Separación vertical entre cards */}
          <ol className="group/list space-y-12">
            {list.map((proj) => (
              <li key={proj._id}>
                <ProjectCard project={proj} />
              </li>
            ))}
          </ol>
        </section>
      );
    })}
  </section>
);
}
