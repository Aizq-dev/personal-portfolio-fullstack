
export type Locale = "es" | "en";

/* ===================== Projects ===================== */
export type CreateProjectDTO = {
  _id?: string;
  locale: Locale;          
  title: string;
  img: string;
  gif?: string;
  description: string;
  tech?: string[];

  
  githubUrl?: string;
  demoUrl?: string;
  stack?: "frontend" | "backend" | "fullstack";
  origin?: "bootcamp" | "personal" | "professional";
  slug?: string;
  order?: number;
};
export type UpdateProjectDTO = Partial<CreateProjectDTO>;

/* ===================== Contact ===================== */
export type CreateContactDTO = {
  _id?: string;
  name: string;
  company?: string;
  phone?: string;
  email: string;
  message: string;
  website?: string;   // honeypot

  // Metadatos opcionales (analytics/UX)
  lang?: Locale;      
  source?: string;    
};

/* ===================== Profile ===================== */
export type CreateProfileDTO = {
  _id?: string;
  locale: Locale;     
  

  name: string;
  avatar: string;
  title?: string;
  slogan?: string;    
  bio?: string;

  
  github?: string;
  linkedin?: string;
  email?: string;
  phone?: string;
};
export type UpdateProfileDTO = Partial<CreateProfileDTO>;

/* ===================== Auth ===================== */
export type RegisterUserDTO = {
  _id?: string;
  user: string;
  password: string;
};
