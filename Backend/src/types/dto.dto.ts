
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

export type CreateProfileDTO = {
  name: string;
  avatar: string;
  sloga?:string; 
  bio?: string;
  github?: string;
  linkedin?: string;
  email?: string;
  phone?: string;    
}
export type UpdateProfileDTO = Partial<CreateProfileDTO>