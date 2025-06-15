import mongoose,{Document,Schema}from "mongoose";

interface IProfile extends Document {
  name: string;
  avatar: string;
  bio?: string;
  github?: string;
  linkedin?: string;
  email?: string;
  phone?: string; // opcional, si decides mostrarlo
}

const profileSchema = new Schema<IProfile>({
  name: { type: String, required: true },
  avatar: { type: String, required: true },
  bio: { type: String },
  github: { type: String },
  linkedin: { type: String },
  email: { type: String },
  phone: { type: String },
}, {
  timestamps: true,
  collection: "profiles"
});

export const Profile = mongoose.model<IProfile>("profiles",profileSchema)