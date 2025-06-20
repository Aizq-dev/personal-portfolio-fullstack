import express from "express"
import { createProfile, deleteProfile, getProfile, updateProfile } from "../controller/profile";
import { isAuth } from "../../middlewares/auth";

export const profileRoutes = express.Router();

profileRoutes.get("/",getProfile);
profileRoutes.post("/",isAuth, createProfile);
profileRoutes.put("/:id",isAuth,updateProfile);
profileRoutes.delete("/:id",isAuth,deleteProfile);
