import mongoose, { Document } from "mongoose";

//Interfaz proyectos
export type Stack = "frontend" | "backend" | "fullstack";
export type Origin = "bootcamp" | "personal" | "profesional";
export interface IProyect extends Document {
  _id?: string;
  title: string;
  img?: string;
  gif?: string;
  description: string;
  tech?: string[];
  githubUrl?: String;
  demoUrl?: String;
  stack: Stack;
  origin: Origin;
}
// Interfaz formulario contacto
export interface IContact extends Document {
  _id?: string;
  name: string;
  company: string;
  phone?: string;
  email: string;
  message: string;
}
//Interfaz usuario
export interface IUser extends Document {
  _id?: string;
  userName: string;
  password: string;
  role?: string;
}
export interface IUserDoc extends IUser, Document{}
// Interfaz Cv
export interface IFileRef {
  url: string; // URL pública (Cloudinary/S3)
  publicId?: string; // id interno del storage (p.ej. Cloudinary)
  filename?: string;
  size?: number; // bytes
  mime?: string; // 'application/pdf'
  uploadedAt?: Date;
}
// Interfaz perfil
export interface IProfile {
  name: string;
  avatar: string;
  title?: string;
  slogan?: string;
  bio?: string;

  links?: {
    github?: {url: string, svg:string}
    linkedin?: {url: string, svg:string}
    gmail?: {email: string, svg:string}
  };

  cv?: {
    current?: IFileRef; // versión activa
    history?: IFileRef[]; // versiones anteriores (opcional)
  }};
export interface IProfileDoc extends IProfile, Document{}

 //interfaz Seed
 export interface SeedData {
  profile: IProfile[];
  projects: IProject[];
}