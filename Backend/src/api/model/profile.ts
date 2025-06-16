import mongoose from "mongoose";
import { IProfile } from "../../types/models"



const profileSchema = new mongoose.Schema<IProfile>({
  name: { type: String, required: true },
  avatar: { type: String, required: true },
  sloga:{type: String},
  bio: { type: String },
  github: { type: String },
  linkedin: { type: String },
  email: { type: String },
  phone: { type: String }
}, {
  timestamps: true,
  collection: "profiles"
});

export const Profile = mongoose.model<IProfile>("profiles",profileSchema)