import projectsJSON from "../assets/data/projects.json";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

const Home = () => {
  const [projects, setProjects] = useState(projectsJSON);

  const projectList = projects.map((project, i) => {
    if (project.featured === true) {
      return <ProjectCard key={i} project={project} />;
    }
  });

  if(!projects) return <h1>Loading...</h1>

  return (
    <>
      <img src="https://i.imgur.com/WYqijJO.png" alt="Banner" />
      <div className="container mx-auto px-4">
        {/* Featured Works Header */}
        <div className="my-5">
          <h1 className="font-bold text-xl">Featured Works</h1>
        </div>
        {/* Project Cards */}
        <div className="flex flex-wrap justify-between">{projectList}</div>  
      </div>
    </>
  );
};

export default Home;
