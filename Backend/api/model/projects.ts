
import mongoose,{Document,Schema}from "mongoose";

interface IProyect extends Document{
    title: string;
    img: string;
    gif?: string;
    description: string;
    tech?: string[]
}
const projectSchema = new mongoose.Schema<IProyect>({
    title: {type:String, required: true},
    img: {type: String, required: true},
    gif:{type: String , required: false},
    description: {type: String, required: true},
    tech: {type: [String], required: false}

},{
timestamps:true,
collection: "projects",}
)

export const Project = mongoose.model<IProyect>("Project",projectSchema)