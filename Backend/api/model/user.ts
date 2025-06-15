import mongoose,{Document,Schema}from "mongoose";

interface IUser extends Document{
    user: string;
    paswword: string;
    role?: string;
    
}
const userSchema = new mongoose.Schema<IUser>({
    user: {type:String, required: true, unique: true},
    paswword: {type: String, required: true},
    role:{type: String , default: "admin"},
    

},{
timestamps:true,
collection: "Users",}
)

export const User = mongoose.model<IUser>("Users",userSchema)