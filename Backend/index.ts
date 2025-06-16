import express from "express"
import  {connectDB} from "./src/config/db"
import dotenv from "dotenv"
import { setError } from "./src/config/error";
import { ErrorHandler, ResponseServer } from "./src/types/express";
import { indexRouter } from "./src/api/routes/indexRouter";

dotenv.config();




const server = express();
connectDB();



// Rutas
//const serverWork: ResponseServer = (req,res,next)=>{return res.status(200).json("Esto funciona perfecto")}
const notFound : ResponseServer = (  req,res,next)=>{ return  next(setError(404, "no tengo nada que ofrecerte"))}
const error :ErrorHandler =( error, req,res,next)=>{ return  res.status(error.status || 500).json(error.message || "Internal server error")}

//Middleware
server.use("/api/v1", indexRouter)
server.use("/", notFound)
server.use(error)

//Inicio server
server.listen(3000, ()=>{
    console.log("Estoy escuchando en: http://localhost:3000")
})