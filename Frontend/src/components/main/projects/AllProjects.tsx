import { useAppData } from "../../../hooks/useAppData";
import type { IProject } from "../../../types/types";

import { BootcampProjects } from "./bootcamWrapper";
import { PersonalProjects } from "./personalProjects";
import { WorkExperience } from "./WorkWrapper";




export const AllProjects = () => {
  const { projects } = useAppData();
  const all: IProject[] = projects ?? [];   

  return (
    <>
     <WorkExperience all={all}  />
    <PersonalProjects all={all}/>
      <BootcampProjects all={all} />
     
    </>
  );
};