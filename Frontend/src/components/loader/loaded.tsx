import { useEffect, useState } from "react";
import { LoadingOverlay } from "./loadingOverlay";
import { useAppData } from "../../hooks/useAppData";




export const Loader =()=>{
    const {profile}=useAppData()
 const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula la carga (sustituye por tu fetch real)
 if(profile)setIsLoading(false)
    
  }, [profile]); 
  
  




  return <><LoadingOverlay show={isLoading} text="Cargando perfil…" /></>}