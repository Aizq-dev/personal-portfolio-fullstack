import mongoose from "mongoose";

export const connectDB = async (): Promise<void>=>{
    try {
        await mongoose.connect(process.env.DB_URL as string)
        console.log("Conectado con exito a la base de datos👍")
    } catch (error) {
        console.log("Error conectando con la bbdd ",error)
    }
}

