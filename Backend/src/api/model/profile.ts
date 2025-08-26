import mongoose from "mongoose";
import { IProfile , IFileRef} from "../../types/models"


const FileRefSchema = new mongoose.Schema<IFileRef>({
  url:      { type: String, required: true },
  publicId: { type: String },
  filename: { type: String },
  size:     { type: Number },
  mime:     { type: String, default: 'application/pdf' },
  uploadedAt: { type: Date, default: Date.now }
},{ _id:false });

const ProfileSchema = new mongoose.Schema<IProfile>({
  name:   { type: String, required: true },
  avatar: { type: String, required: true },
  slogan: { type: String },
  bio:    { type: String },

  links: {
    github:   { type: String },
    linkedin: { type: String },
    other:    [{ label: String, url: String }]
  },

  contact: {
    email: { type: String },
    phone: { type: String }
  },

  cv: {
    current: FileRefSchema,
    history: [FileRefSchema]
  }
},{
  timestamps: true,
  collection: 'profiles'
});

export const Profile = mongoose.model<IProfile>("profiles",ProfileSchema)