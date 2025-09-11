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
  locale: Locale

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
  locale:Locale;
  __v?: number
  createdAt?: string;
  updatedAt?: string;
}

export type SectionByStackProps = {
  title: string;                    
  projects: IProject[];              
  labels?: Partial<Record<Stack, string>>;
  id: "workXP" | "PersonalPJ" | "bootcamp" 
};

// App data
export type Locale = "es" | "en";
export type AppData = {
  profile: IProfile | null;
  projects: IProject[] | null;
  loading: boolean;
  error?: string | null;
  refresh?: () => Promise<void>; 
  lang?: Locale
}
export type Props = {
  size?: number;              // diámetro del halo
  color?: string;             // rgba/oklch del halo
  target?: HTMLElement | null; // contenedor: si null, usa window
  className?: string;         // por si quiero pasar clases extra (hidden md:block, etc.)
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