import mongoose, { Schema } from "mongoose";
import { IProject } from "../../types/models";

const projectSchema = new Schema<IProject>(
  {
  
    locale: { type: String, enum: ["es", "en"], required: true, index: true },
    title: { type: String, required: true },
    img: { type: String },
    gif: { type: String },
    description: { type: String, required: true },
    tech: { type: [String] },
    githubUrl: { type: String },
    demoUrl: { type: String },
    stack: { type: String, enum: ["frontend", "backend", "fullstack"], required: true },
    origin: { type: String, enum: ["bootcamp", "personal", "professional"], required: true },
  },
  {
    timestamps: true,
    collection: "Projects",
  }
);

export const Project = mongoose.model<IProject>("Projects", projectSchema);
