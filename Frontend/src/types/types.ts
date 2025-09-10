import type { Icons } from "../components/header/profile/rrss/icons";

// Profile
export type Link = {
  github?: {url: string, icon: string};
  linkedin?: {url: string, icon: string};
  gmail?: {email: string, icon: string};
 
};

type FileRef = {
  url: string;
  publicId?: string;
  filename?: string;
  size?: number;
  mime?: string;
  uploadedAt?: string;
};

export interface IProfile {
  _id: string;
  name: string;
  avatar: string;
  title?: string;
  slogan?: string;
  bio?: string;
  links?: Link;

  cv?: { current?: FileRef; history?: FileRef[] };
}

//Projects
export type Stack = "fullstack" | "frontend" | "backend";
export interface IProject {
  _id: string;
  title: string;
  img?: string;
  gif?: string;
  description: string;
  tech: string[];  
  githubUrl?: string;
  demoUrl?: string;
  stack: Stack;
  origin: string;
  __v?: number
  createdAt?: string;
  updatedAt?: string;
}

export type SectionByStackProps = {
  title: string;                    // “Bootcamp”, “Experiencia profesional”, etc.
  projects: IProject[];              // lista ya filtrada (según origen)
  labels?: Partial<Record<Stack, string>>;
  id: "workXP" | "PersonalPJ" | "bootcamp" // textos por stack si quiero cambiarlos
};

// Api data
export type AppData = {
  profile: IProfile | null;
  projects: IProject[] | null;
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;  // por si quiero volver a pedir
};

//CursosHightlight
export type Props = {
  size?: number;              // diámetro del halo
  color?: string;             // rgba/oklch del halo
  target?: HTMLElement | null; // contenedor: si null, usa window
  className?: string;         // por si quierp pasar clases extra (hidden md:block, etc.)
};
//Icons
export type IconKey = keyof typeof Icons;

//RRSS Items
export type RrssItem = {
  name: string;
  icon: IconKey;
  url?: string;
  email?: string;
};
//form 
export type ContactFormValues = {
  name: string;
  company?: string;
  phone?: string;
  email: string;
  message: string;
  website?: string; // honeypot
};