import express from "express"
import { getAllprojects } from "../controller/project"

export const projectsRoutes = express.Router()

projectsRoutes.get("/",getAllprojects)
