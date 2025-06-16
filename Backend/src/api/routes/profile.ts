import express from "express"
import { createProfile, deleteProfile, getProfile, updateProfile } from "../controller/profile";

export const profileRoutes = express.Router();

profileRoutes.get("/",getProfile);
profileRoutes.post("/", createProfile);
profileRoutes.put("/:id",updateProfile);
profileRoutes.delete("/:id",deleteProfile);
