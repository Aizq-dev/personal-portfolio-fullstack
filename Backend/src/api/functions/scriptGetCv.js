const  {v2: cloudinary}= require("cloudinary")
const path = require("path")
require('dotenv').config({
  // Ajusta los '..' según la ubicación REAL de tu .env
  path: path.join(__dirname, '../../../.env'),
});

cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET ,
    });

(async () => {
  try {
    const r = await cloudinary.uploader.upload("https://collection.cloudinary.com/ddumhsyl6/1eaa6592b164dd0190ea7461146929eb", { resource_type: "raw" });
    console.log(r);
  } catch (err) {
    console.dir(err, { depth: 8 });
    // muchos errores vienen como: err.error.message
    console.log('msg:', err?.error?.message, 'http_code:', err?.error?.http_code);
  }
})();
