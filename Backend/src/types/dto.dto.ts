
export type CreateProjectDTO = {
  title: string;
  img: string;
  gif?: string;
  description: string;
  tech?: string[];
};
export type UpdateProjectDTO = Partial<CreateProjectDTO>;