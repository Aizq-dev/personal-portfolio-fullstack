import { createContext, useEffect, useMemo, useState } from "react";
import type { AppData,IProfile,IProject } from "../types/types";
import { fetchData } from "../utils/fetchapi";



export const AppDataContext= createContext<AppData |null>(null);
export const AppDataProvider = ({children}: {children: React.ReactNode})=>{
    const [profileState, setProfile]=useState<IProfile | null>(null)
    const [projectsState,setProjects]=useState<IProject[] | null>(null)
    const [loading, setLoading]=useState(true);
    const [error, setError]= useState<string | null>(null)

    const load = async ()=>{
        setError(null)
        setLoading(true)
        try{
            const [profileData, projectsData]= await Promise.all([
                fetchData<IProfile[]>("profile"),
                fetchData<IProject[]>("projects")
            ])
            setProfile(profileData?.[0] ?? null);
            setProjects(projectsData ?? null)
        }catch(e){
            console.error("AppData load error", e);
            setError("No se pudieron cargar los datos")
        }finally{
            
            setLoading(false)
        }
    }
    useEffect(()=>{
        void load()
    },[])

    const value = useMemo<AppData>(()=>({
        profile:profileState,
        projects:projectsState,
        loading,error, refresh: load
    }),[profileState,projectsState,loading,error])
            //console.log(profileState)
            //console.log(projectsState)
    return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>
}

