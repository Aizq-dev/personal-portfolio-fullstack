import mongoose,{Document}from "mongoose";

//Interfaz proyectos
export interface IProyect extends Document{
    id:string;
    title: string;
    img: string;
    gif?: string;
    description: string;
    tech?: string[]
}
// Interfaz formulario contacto
export interface IContact extends Document{
    id:string;
    name: string;
    company: string;
    phone?: string;
    email: string;
    message: string;
}
//Interfaz usuario
 export interface IUser extends Document{
    id:string;
    user: string;
    paswword: string;
    role?: string;
    
}
// Interfaz perfil
export interface IProfile extends Document {
    id:string;
  name: string;
  avatar: string;
  bio?: string;
  github?: string;
  linkedin?: string;
  email?: string;
  phone?: string; 
}