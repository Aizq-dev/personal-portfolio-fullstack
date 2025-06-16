
export type CreateProjectDTO = {
  title: string;
  img: string;
  gif?: string;
  description: string;
  tech?: string[];
};
export type UpdateProjectDTO = Partial<CreateProjectDTO>;

export type CreateContactDTO ={
    name: string;
    company: string;
    phone: string;
    email:string;
    message: string
}