import express from "express"
import {  createProject, deleteProject, getAllprojects, getProjectByID, updateProject } from "../controller/project"

export const projectsRoutes = express.Router();

projectsRoutes.get("/",getAllprojects);
projectsRoutes.get("/:id",getProjectByID);
projectsRoutes.post("/", createProject);
projectsRoutes.put("/:id",updateProject);
projectsRoutes.delete("/:id",deleteProject);
