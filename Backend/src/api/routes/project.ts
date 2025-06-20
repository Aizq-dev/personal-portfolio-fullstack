import express from "express"
import {  createProject, deleteProject, getAllprojects, getProjectByID, updateProject } from "../controller/project"
import { isAuth } from "../../middlewares/auth";

export const projectsRoutes = express.Router();

projectsRoutes.get("/",getAllprojects);
projectsRoutes.get("/:id",getProjectByID);
projectsRoutes.post("/",isAuth, createProject);
projectsRoutes.put("/:id",isAuth,updateProject);
projectsRoutes.delete("/:id",isAuth,deleteProject);
