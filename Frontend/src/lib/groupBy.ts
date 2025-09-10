import type { IProject, Stack } from "../types/types";


export function groupByStack(projects: IProject[]) {
  const by: Record<Stack, IProject[]> = { fullstack: [], frontend: [], backend: [] };
  for (const p of projects) {
    by[p.stack].push(p); // OK: p.stack es Stack
  }
  return by;
}