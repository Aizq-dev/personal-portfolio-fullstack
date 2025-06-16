import { setError } from "../../config/error";
import { AsyncResponseServer } from "../../types/express";
import {Request, Response, NextFunction} from "express"
import { IProyect } from "../../types/models";
import {  Project } from "../model/projects"



export const getAllprojects : AsyncResponseServer = async(req,res,next)=>{
    try {
        const allProjects : IProyect[] = await Project.find();
         res.status(200).json(allProjects)
        
    } catch (error) {
         next(setError(400,"Cant find projects 😢"))
    }

}
export const getProject : AsyncResponseServer<{id: string}> = async(req,res,next)=>{
    try {
        const {id} = req.params
        const project : IProyect | null = await Project.findById(id);
        if(!project){
            next(setError(400,"Project not found 😢"))
        }
         res.status(200).json(project)
        
    } catch (error) {
         next(setError(400,"Can´t find project by id 😢"))
    }
}
export const CreateProjectByID : AsyncResponseServer <IProyect>= async(req,res,next)=>{
    try {
        const newProject = new Project(req.body);
        const projectBBDD = await newProject.save();
         res.status(201).json(newProject)
        
    } catch (error) {
         next(setError(400,"Can't create Project 😢"))
    }
}
