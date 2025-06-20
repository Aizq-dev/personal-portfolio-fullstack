import mongoose,{ CallbackWithoutResultAndOptionalError } from "mongoose";
import { IUser } from "../../types/models";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema<IUser>({
    userName: {type:String, required: true, unique: true},
    password: {type: String, required: true},
    role:{type: String , default: "admin"},
    

},{
timestamps:true,
collection: "Users",}
)

userSchema.pre<IUser>("save", function (this: IUser, next: CallbackWithoutResultAndOptionalError) {
  if (this.isModified("password")) {
    this.password = bcrypt.hashSync(this.password, 10);
  }
  next();
});
export const User = mongoose.model<IUser>("Users",userSchema)