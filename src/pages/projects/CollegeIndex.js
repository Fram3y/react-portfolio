import { useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import projectsJSON from "../../assets/data/projects.json";

const CollegeIndex = () => {
  const [projects, setProjects] = useState(projectsJSON);

  const projectList = projects.map((project, i) => {
    if (project.college === true) {
      return <ProjectCard key={i} project={project} />;
    }
  });

  if(!projects) return <h1>Loading...</h1>

  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="font-bold text-xl my-5">College Projects</h1>
        <div className="grid grid-cols-3 gap-4">{projectList}</div>
      </div>
    </>
  );
};

export default CollegeIndex;
