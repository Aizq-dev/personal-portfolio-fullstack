import { setError } from "../../config/error";
import { AsyncResponseServer } from "../../types/express";
import {Request, Response, NextFunction} from "express"
import { IProyect } from "../../types/models";
import {  Project } from "../model/projects"
import { CreateProjectDTO, UpdateProjectDTO}   from "../../types/dto.dto";



export const getAllprojects : AsyncResponseServer = async(req,res,next)=>{
    try {
        const allProjects : IProyect[] = await Project.find();
         res.status(200).json(allProjects)
        
    } catch (error) {
         next(setError(400,"Cant find projects 😢"))
    }

}
export const getProjectByID : AsyncResponseServer<{id: string}> = async(req,res,next)=>{
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

export const createProject : AsyncResponseServer <{},CreateProjectDTO>= async(req,res,next)=>{
    try {
        const newProject = new Project(req.body);
        const projectBBDD: IProyect= await newProject.save();
        if(!projectBBDD){next(setError(400,"Can't create Project "));}
         res.status(201).json(projectBBDD)
        
    } catch (error) {
         next(setError(400,"Can't create Project 😢"));
    }
}

export const deleteProject: AsyncResponseServer<{id : string}> = async (req,res , next )=>{
try {
    const {id} = req.params;
    
    const project = await Project.findByIdAndDelete(id);
    if(!project){
        next(setError(400,"Can't delete project  😢"));
    }
    res.status(200).json(project);
} catch (error) {
     next(setError(400,"Can't delete project  😢"));
}

} 

export const updateProject: AsyncResponseServer<{ id: string }, UpdateProjectDTO> = 
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const updated = await Project.findByIdAndUpdate(
        id,
        { $set: req.body },   // actualiza solo los campos recibidos
        { new: true }
      );

      if (!updated) {
        return next(setError(404, "Project not found"));
      }

      res.status(200).json(updated);
    } catch (err) {
      next(setError(400, "Can't update project 😢"));
    }
};