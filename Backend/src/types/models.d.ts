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
    user: string;
    paswword: string;
    role?: string;
    
}
// Interfaz perfil
export interface IProfile extends Document {
    _id?:string;
  name: string;
  avatar: string;
  sloga?:string; 
  bio?: string;
  github?: string;
  linkedin?: string;
  email?: string;
  phone?: string; 
}