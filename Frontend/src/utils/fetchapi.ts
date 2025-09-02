import axios from "axios";

const api = import.meta.env.VITE_API_URL;

export const fetchData = async <T>(route:string): Promise<T | null>=>{
    try{
        const res= await axios.get(`${api}/${route}`);
        console.log(res.data)
        return res.data
        
    }
    catch(error){
        console.error(`Error fetching data ${route}`,error)
        return null
    }
};
