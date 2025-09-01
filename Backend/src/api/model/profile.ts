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
  title:{type: String},
  slogan: { type: String },
  bio:    { type: String },

  links: {
    github:   { type: String },
    linkedin: { type: String },
     other: [{ label: { type: String }, url: { type: String } }]
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
  collection: 'Profile'
});

export const Profile = mongoose.model<IProfile>("Profile",ProfileSchema)