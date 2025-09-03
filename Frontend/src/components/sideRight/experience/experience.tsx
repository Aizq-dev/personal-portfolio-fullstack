import type { IProject } from "../../../types/types";
import { useAppData } from "../../../utils/functions"
import "./experience.css"

export const ExperienceWork =()=>{
    const {projects}= useAppData();

    const professionalProject = projects?.filter(p =>p.origin =="professional" )
    console.log(professionalProject)
    
    const frontendPj = professionalProject?.filter(p => p.stack === "frontend")
    const backendPj = professionalProject?.filter(p => p.stack === "backend")
    const fullstackPj = professionalProject?.filter(p => p.stack === "fullstack")
    const card =(p: IProject)=>{
        return 
        <li key={p._id}>
            <div className="cardImg">
                <img src={`${p.img}`} />
            </div>
            <div></div>
        </li>
    }

    return (
        <div className="WorkXP">
            {fullstackPj && <section>
                <h1>Fullstack</h1>
                <ul>
                {fullstackPj.map(p=> card(p)
                )}

                </ul>
                </section>}
            {frontendPj &&
            <section>
            <h1>Frontend</h1>
            <ul>
                {frontendPj.map(p=>(
                    <li key={p._id}>
                        <h3>p.title</h3>
                    </li>
                ))}

                </ul>
                </section>}
            {backendPj && <></>}
            
        </div>
    )
}