import { setError } from "../../config/error";
import { generateSign } from "../../config/jwt";
import { RegisterUserDTO } from "../../types/dto.dto";
import { AsyncResponseServer } from "../../types/express";
import { IUser } from "../../types/models";
import { User } from "../model/user";
import bcrypt from "bcrypt"


export const register : AsyncResponseServer <{},RegisterUserDTO>= async(req,res,next)=>{
    try {
        const newUser = new User(req.body)
        const userDuplicate = await User.findOne({userName: req.body.user})
        if(userDuplicate){
             return next(setError(400,"This user already exist"));
        }

        const userBBDD : IUser= await newUser.save()

        if(!userBBDD){
            return next(setError(400,"Can't create user "));
        }
         res.status(200).json(userBBDD)

        
    } catch (error) {
        return next(setError(400,"Can't register"))
    }
}

export const login: AsyncResponseServer<{}, RegisterUserDTO> = async (req,res,next) => {
  try {
    const { user: userName, password } = req.body;
    const foundUser = await User.findOne({ user: userName });

    if (!foundUser) {
      return next(setError(404, "This user doesn't exist"));
    }

    const isMatch = bcrypt.compareSync(password, foundUser.password);
    if (!isMatch) {
      return next(setError(401, "Invalid credentials"));
    }

    const token: string = generateSign(foundUser._id.toString());

    const { password: _, ...userWithoutPassword } = foundUser.toObject();

    res.status(200).json({
      user: userWithoutPassword,
      token,
    });
  } catch (err) {
    return next(setError(500, "Can't login"));
  }
};
