import {Request, Response, NextFunction} from "express"


export type ResponseServer =(req:Request,res: Response,next: NextFunction)=>void
export type AsyncResponseServer <P ={}>= (req: Request<P>, res: Response, next: NextFunction) => Promise<void>;
export type ErrorHandler = (error: Error & {status?: number}, req:Request,res: Response,next: NextFunction)=> void