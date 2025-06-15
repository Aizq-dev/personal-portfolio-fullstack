import mongoose,{Document,Schema}from "mongoose";

interface IContact extends Document{
    name: string;
    company: string;
    phone?: string;
    email: string;
    message: string;
}
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