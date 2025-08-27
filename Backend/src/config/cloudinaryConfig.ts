import {v2 as cloudinary, ConfigOptions} from "cloudinary"


    //Config
const CloudinaryConfig: ConfigOptions= ({
         cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string,
        api_key:process.env.CLOUDINARY_API_SECRET as string,
        api_secret: process.env.CLOUDINARY_API_SECRET as string,
    });

cloudinary.config(CloudinaryConfig)

export default cloudinary