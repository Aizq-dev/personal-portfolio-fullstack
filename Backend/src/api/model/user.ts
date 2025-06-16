import mongoose from "mongoose";
import { IUser } from "../../types/models";


const userSchema = new mongoose.Schema<IUser>({
    user: {type:String, required: true, unique: true},
    paswword: {type: String, required: true},
    role:{type: String , default: "admin"},
    

},{
timestamps:true,
collection: "Users",}
)

export const User = mongoose.model<IUser>("Users",userSchema)