
import { useAppData } from "../../../utils/functions"
import { ProjectCard } from "../projectCard/projectCard";
//import "./experience.css"

export const ExperienceWork =()=>{
    const {projects}= useAppData();

    const professionalProject = projects?.filter(p =>p.origin =="professional" )
    
    
    const frontendPj = (professionalProject ?? []).filter(p => p.stack === "frontend")
    const backendPj = (professionalProject ?? []).filter(p => p.stack === "backend")
    const fullstackPj = (professionalProject ?? []).filter(p => p.stack === "fullstack")
console.log(professionalProject)

    return (
        <div className="WorkXP">
            <h1>Experienca Laboral/Freelance</h1>
            {fullstackPj?.length > 0 && <section>
                <h2>Fullstack</h2>
                <ul>
                {fullstackPj.map(p=>
                    <ProjectCard key={p._id} project={p}/>
                )}
                </ul>
                </section>}
            {frontendPj?.length >0  &&
            <section>
            <h2>Frontend</h2>
            <ul>
                {frontendPj.map(p=>(
                     <ProjectCard key={p._id} project={p}/>
                ))}

                </ul>
                </section>}
            {backendPj?.length >0  &&
            <section>
            <h2>Frontend</h2>
            <ul>
                {frontendPj.map(p=>(
                     <ProjectCard key={p._id} project={p}/>
                ))}

                </ul>
                </section>}
            
        </div>
    )
}