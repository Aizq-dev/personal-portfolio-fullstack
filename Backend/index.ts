import express from "express"
import  {connectDB} from "./src/config/db"
import dotenv from "dotenv"
import { setError } from "./src/config/error";
import { ErrorHandler, ResponseServer } from "./src/types/express";
import { indexRouter } from "./src/api/routes/indexRouter";

dotenv.config();
const server = express();

connectDB();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Rutas
server.use("/api/v1/",indexRouter)

//const serverWork: ResponseServer = (req,res,next)=>{return res.status(200).json("Esto funciona perfecto")}
const notFound : ResponseServer = (  req,res,next)=>{ return  next(setError(404, "no tengo nada que ofrecerte"))}
const error :ErrorHandler =( error, req,res,next)=>{ return  res.status(error.status || 500).json(error.message || "Internal server error")}



server.use("/", notFound)
server.use(error)

//Inicio server

const raw = process.env.PORT ?? "3000";
const PORT: number = Number.parseInt(raw, 10);
const SAFE_PORT = Number.isNaN(PORT) ? 3000 : PORT;
server.listen(SAFE_PORT, "0.0.0.0", () => {
  console.log(`Servidor en http://localhost:${SAFE_PORT}`);
});