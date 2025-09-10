
export type CreateProjectDTO = { 
  _id:string;
    title: string;
  img: string;
  gif?: string;
  description: string;
  tech?: string[];
};
export type UpdateProjectDTO = Partial<CreateProjectDTO>;

export type CreateContactDTO ={
      _id:string;
    name: string;
    company: string;
    phone: string;
    email:string;
    message: string;
    website?:string,
}

export type CreateProfileDTO = {
    _id:string;
    name: string;
  avatar: string;
  title?: string;
  sloga?:string; 
  bio?: string;
  github?: string;
  linkedin?: string;
  email?: string;
  phone?: string;    
}
export type UpdateProfileDTO = Partial<CreateProfileDTO>

export type RegisterUserDTO = {
  _id:string;
    user: string;
  password: string;
};