import express from "express";
import { projectsRoutes } from "./project";
import { contactRoutes } from "./contactForm";
import { profileRoutes } from "./profile";
import { userRoutes } from "./user";

export const indexRouter = express.Router();

indexRouter.use("/projects", projectsRoutes);
indexRouter.use("/contact",contactRoutes);
indexRouter.use("/profile",profileRoutes);
indexRouter.use("/user",userRoutes);