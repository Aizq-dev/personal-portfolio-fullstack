import mongoose from "mongoose";
import { IProyect } from "../../types/models";

const projectSchema = new mongoose.Schema<IProyect>({
    title: {type:String, required: true},
    img: {type: String, required: true},
    gif:{type: String , required: false},
    description: {type: String, required: true},
    tech: {type: [String], required: false},
    githubUrl: {type: String, required: false},
    demoUrl:  {type: String, required: false}


},{
timestamps:true,
collection: "projects",}
)

export const Project = mongoose.model<IProyect>("Project",projectSchema)