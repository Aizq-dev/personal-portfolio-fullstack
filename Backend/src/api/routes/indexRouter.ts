import express from "express";
import { projectsRoutes } from "./project";
import { contactRoutes } from "./contactForm";

export const indexRouter = express.Router();

indexRouter.use("/projects", projectsRoutes);
indexRouter.use("/contact",contactRoutes)