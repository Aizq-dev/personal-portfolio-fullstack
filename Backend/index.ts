//! express es para temas del server
import express,{Request, Response, NextFunction} from "express"
import  {connectDB} from "./config/db"
import dotenv from "dotenv"
import { setError } from "./config/error";

dotenv.config();



const server = express();
connectDB();

//Tipos
type ResponseServer =(req:Request,res: Response,next: NextFunction)=>void
type ErrorHandler = (error: Error & {status?: number}, req:Request,res: Response,next: NextFunction)=> void

// Rutas
const serverWork: ResponseServer = (req,res,next)=>{return res.status(200).json("Esto funciona perfecto")}
const notFound : ResponseServer = (  req,res,next)=>{ return  next(setError(404, "no tengo nada que ofrecerte"))}
const error :ErrorHandler =( error, req,res,next)=>{ return  res.status(error.status || 500).json(error.message || "Internal server error")}

//Middleware
server.use("/api/v1", serverWork)
server.use("/", notFound)
server.use(error)

//Inicio server
server.listen(3000, ()=>{
    console.log("Estoy escuchando en: http://localhost:3000")
})