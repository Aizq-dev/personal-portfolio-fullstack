import mongoose,{Document}from "mongoose";

//Interfaz proyectos
export interface IProyect extends Document{
    _id?:string;
    title: string;
    img: string;
    gif?: string;
    description: string;
    tech?: string[]
}
// Interfaz formulario contacto
export interface IContact extends Document{
    _id?:string;
    name: string;
    company: string;
    phone?: string;
    email: string;
    message: string;
}
//Interfaz usuario
 export interface IUser extends Document{
    _id?:string;
    userName: string;
    password: string;
    role?: string;
    
}
// Interfaz Cv
export interface IFileRef {
  url: string;          // URL pública (Cloudinary/S3)
  publicId?: string;    // id interno del storage (p.ej. Cloudinary)
  filename?: string;
  size?: number;        // bytes
  mime?: string;        // 'application/pdf'
  uploadedAt?: Date;
}
// Interfaz perfil
export interface IProfile extends Document {
  name: string;
  avatar: string;
  slogan?: string;      
  bio?: string;

  links?: {
    github?: string;
    linkedin?: string;
    other?: Array<{ label: string; url: string }>; // flexibles extra
  };

  contact?: {
    email?: string;
    phone?: string;
  };

  cv?: {
    current?: IFileRef;     // versión activa
    history?: IFileRef[];   // versiones anteriores (opcional)
  };
}