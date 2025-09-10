import { Document } from "mongoose";

/* ---------- Common ---------- */
export type Locale = "es" | "en";
export type Stack = "frontend" | "backend" | "fullstack";
export type Origin = "bootcamp" | "personal" | "professional";

/* ---------- Project ---------- */
export interface IProject extends Document {
  _id?: string;
  locale: Locale;           

  title: string;
  img?: string;
  gif?: string;
  description: string;
  tech?: string[];

  githubUrl?: string;       
  demoUrl?: string;         

  stack: Stack;
  origin: Origin;

  createdAt?: Date;
  updatedAt?: Date;
}

/* ---------- Contact ---------- */
export interface IContact extends Document {
  _id?: string;
  name: string;
  company?: string;
  phone?: string;
  email: string;
  message: string;
  website?: string;         // honeypot

  // metadatos opcionales
  lang?: Locale;            // idioma seleccionado en el front
  source?: string;          // p.ej. "rrss-email-icon"
  status?: "new" | "replied" | "archived";

  createdAt?: Date;
  updatedAt?: Date;
}

/* ---------- User ---------- */
export interface IUser extends Document {
  _id?: string;
  userName: string;         // (coincide con tu modelo)
  password: string;
  role?: string;

  createdAt?: Date;
  updatedAt?: Date;
}
export interface IUserDoc extends IUser {}

/* ---------- CV / Files ---------- */
export interface IFileRef {
  url: string;
  publicId?: string;
  filename?: string;
  size?: number;            // bytes
  mime?: string;            // 'application/pdf'
  uploadedAt?: Date;
}

/* ---------- Profile ---------- */
export interface IProfile {
  locale: Locale;           // i18n
  name: string;
  avatar: string;
  title?: string;
  slogan?: string;
  bio?: string;
  links: { icon: string; url: string }[];
  cv?: {
    current?: IFileRef;
    history: IFileRef[];
  };
  createdAt?: Date;
  updatedAt?: Date;
}
export interface IProfileDoc extends IProfile, Document {}

/* ---------- Seed ---------- */
export interface SeedData {
  profile: CreateProfileDTO[];
  projects: CreateProjectDTO[];
}
