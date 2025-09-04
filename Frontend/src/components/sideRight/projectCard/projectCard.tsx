//import "./projectCard.css"
import type { IProject } from "../../../types/types";


export function ProjectCard({ project }: { project: IProject }) {
    
  return (
    <li  className="card">
      <div className="cardImg">
        <img src={`${project.img}`} alt={project.title} className="w-32" />
      </div>
      <div className="cardBody">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      
      <div className="techs">
        {project.tech.map((p)=>
        <p className="tech">{p}</p>
        )}
      </div>
      </div>
    </li>
  );
}
