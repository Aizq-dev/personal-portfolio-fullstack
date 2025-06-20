import express from "express"

import { login,register } from "../controller/user";
import { isAuth } from "../../middlewares/auth";

export const userRoutes = express.Router();

userRoutes.post("/register",isAuth, register);
userRoutes.post("/login",login);
