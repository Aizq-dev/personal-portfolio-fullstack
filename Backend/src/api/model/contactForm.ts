import mongoose from "mongoose";
import { IContact } from "../../types/models";

const contactSchema = new mongoose.Schema<IContact>({
    name: {type:String, required: true},
    company: {type: String, required: true},
    phone:{type: String },
    email: {type: String, required: true},
    message: {type: String, required: true},
    website:{type:String}

},{
timestamps:true,
collection: "Contacts",}
)

export const Contact = mongoose.model<IContact>("Contacts",contactSchema)