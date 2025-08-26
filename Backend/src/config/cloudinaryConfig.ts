import {v2 as cloudinary, ConfigOptions} from "cloudinary"


    //Config
const CloudinaryConfig: ConfigOptions= ({
        cloud_name: "ddumhsyl6" as string,
        api_key:process.env.Cloudinary_Api_key as string,
        api_secret: process.env.Cloudinary_Api_secret as string,
    });

cloudinary.config(CloudinaryConfig)

export default cloudinary