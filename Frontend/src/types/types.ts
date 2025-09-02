// Profile
export type Link = {
  github?: string;
  linkedin?: string;
  other?: { label: string; url: string }[];
};
type Contact = { email?: string; phone?: string };
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
  contact?: Contact;
  cv?: { current?: FileRef; history?: FileRef[] };
}

//Projects
export interface IProject {
  _id: string;
  title: string;
  description: string;
  image?: string;
  repoUrl?: string;
  demoUrl?: string;
  tags?: string[];
  createdAt?: string;
  updatedAt?: string;
}