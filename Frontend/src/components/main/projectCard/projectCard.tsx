//import "./projectCard.css"
import { useState } from "react";
import type { IProject } from "../../../types/types";
import { useI18n } from "../../../hooks/usei18n";


export function ProjectCard({ project }: { project: IProject }) {
  const [hover, setHover] = useState(false);
  const { t } = useI18n();

  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-4 md:gap-4 lg:hover:opacity-100 lg:group-hover/list:opacity-50"
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3 className="font-medium leading-tight text-slate-200 group-hover:text-teal-300">
          <span>{project.title}</span>
        </h3>

        <p className="mt-2 text-sm leading-normal text-slate-300">
          {project.description}
        </p>

        <ul className="mt-2 flex flex-wrap gap-2 mb-4">
          {(project.tech ?? []).map((tch) => (
            <li
              key={tch}
              className="rounded bg-teal-900/60 px-2 py-0.5 text-xs text-teal-300"
            >
              {tch}
            </li>
          ))}
        </ul>

        <div>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold text-white transition mr-4 hover:bg-teal-700"
          >
            {t("action_view_repo")}
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-teal-700"
          >
            {t("action_live_demo")}
          </a>
        </div>
      </div>

      <div className="z-10 sm:order-1 sm:col-span-2 ">
        {project.img &&
          (hover ? (
            <video
              src={project.gif}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[200px] aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/20"
            />
          ) : (
            <img
              src={hover && project.gif ? project.gif : project.img}
              alt={project.title}
              loading="lazy"
              className="w-full h-[200px] aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/20"
            />
          ))}
      </div>
    </article>
  );
}
