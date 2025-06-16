import mongoose from "mongoose";
import { IContact } from "../../types/models";

const contactSchema = new mongoose.Schema<IContact>({
    name: {type:String, required: true},
    company: {type: String, required: true},
    phone:{type: String },
    email: {type: String, required: true},
    message: {type: String, required: true}

},{
timestamps:true,
collection: "contacts",}
)

export const Contact = mongoose.model<IContact>("contacts",contactSchema)