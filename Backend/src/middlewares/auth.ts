import { User } from "../api/model/user";
import { setError } from "../config/error";
import { verifyJwt } from "../config/jwt";
import { AsyncResponseServer, AuthMiddleware } from "../types/express";
import { IUser } from "../types/models";



export const isAuth : AuthMiddleware= async (req, res , next)=>{
try {
    const token = req.headers.authorization;
    if(!token){
        return next(setError(401, "You are not authorited"))
    }

    const parsedToken = token.replace("Bearer ", "");
    const validToken = verifyJwt(parsedToken);
    const userLogged = await  User.findById(validToken.id)
    if(!userLogged){
        return next(setError(400, "User not found"))
    }

   const { password, ...userWithoutPassword } = userLogged.toObject();
    req.user = userLogged;
    next()

} catch (error) {
    return next(setError(400, "The token was wrongt"))
}

}