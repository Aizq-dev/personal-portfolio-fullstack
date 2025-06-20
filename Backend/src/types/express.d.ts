import {Request, Response, NextFunction} from "express"


export type ResponseServer =(req:Request,res: Response,next: NextFunction)=>void
export type AsyncResponseServer <P ={}, B= unknown>= (req: Request<P,any,B>, res: Response, next: NextFunction) => Promise<void>;
export type ErrorHandler = (error: Error & {status?: number}, req:Request,res: Response,next: NextFunction)=> void
export type AuthMiddleware = (
  req: Request & { user?: IUser },
  res: Response,
  next: NextFunction
) => Promise<void>;