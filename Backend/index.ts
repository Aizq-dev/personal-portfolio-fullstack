//! express es para temas del server
const express = require("express")
const {connectDB} = require("./config/db")
require("dotenv").config()
import {Request, Response, NextFunction} from "express"


const server = express();
connectDB();

type ResponseServer =(req:Request,res: Response,next: NextFunction)=>void

const serverWork: ResponseServer = (req,res,next)=>{return res.status(200).json("Esto funciona perfecto")}
const notFound : ResponseServer = (req,res,next)=>{ return  res.status(404).json("no tengo nada que ofrecerte")}
server.use("/api/v1", serverWork)

server.use("/", notFound)

server.listen(3000, ()=>{
    console.log("Estoy escuchando en: http://localhost:3000")
})