import mongoose, { Schema } from "mongoose";
import { IProfile, IFileRef } from "../../types/models";

const FileRefSchema = new Schema<IFileRef>({
  url:        { type: String, required: true },
  publicId:   { type: String },
  filename:   { type: String },
  size:       { type: Number },
  mime:       { type: String, default: "application/pdf" },
  uploadedAt: { type: Date, default: Date.now },
}, { _id: false });

const ProfileSchema = new Schema<IProfile>({

  locale: { type: String, enum: ["es", "en"], required: true },

  name:   { type: String, required: true },
  avatar: { type: String, required: true },
  title:  { type: String },
  slogan: { type: String },
  bio:    { type: String },


  links: [{
    icon: { type: String, required: true },
    url:  { type: String, required: true },
  }],

  cv: {
    current: FileRefSchema,
    history: [FileRefSchema],
  },
}, {
  timestamps: true,
  collection: "Profile",
});

// (opcional) fuerza 1 perfil por idioma
ProfileSchema.index({ locale: 1 }, { unique: true });

export const Profile = mongoose.model<IProfile>("Profile", ProfileSchema);
