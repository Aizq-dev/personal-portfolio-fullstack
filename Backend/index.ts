// src/index.ts
import "dotenv/config";
import express, { RequestHandler, ErrorRequestHandler } from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./src/config/db";
import { indexRouter } from "./src/api/routes/indexRouter";
import { setError } from "./src/config/error";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const ALLOWED_ORIGINS = ["http://localhost:5173"];

/*app.use(
  cors({
    origin(origin, callback) {
      if (!origin || ALLOWED_ORIGINS.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    }, methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);*/
app.use(cors({
  origin: (origin, callback)=>{
    callback(null,true)
  }}))

  app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
 
  next()

})
  
app.use(morgan("dev"));


// Rutas de salud primero
const rootHandler: RequestHandler = (_req, res) => {
  res.send("OK");
};
const healthHandler: RequestHandler = (_req, res) => {
  res.json({ mongo: mongoose.connection.readyState }); // 1 = connected
};
app.get("/", rootHandler);
app.get("/health", healthHandler);

// rutas de API
app.use("/api/v1", indexRouter);

const notFound: RequestHandler = (_req, _res, next) =>
  next(setError(404, "no tengo nada que ofrecerte"));
app.use(notFound);

// Middleware de error (4 args)
const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  res
    .status((err as any).status || 500)
    .json((err as any).message || "Internal server error");
};
app.use(errorHandler);

// Puerto
const PORT = Number.parseInt(process.env.PORT ?? "3000", 10);

// Arranque
async function start() {
  await connectDB(); // conecta a Mongo
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server on http://localhost:${PORT}`);
  });
}

start();
