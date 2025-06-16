import express from "express"
import { projectsRoutes } from "./project"

export const indexRouter = express.Router()

indexRouter.use("/projects", projectsRoutes)