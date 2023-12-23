import { useState } from "react";
import { useParams } from "react-router-dom";
import projectsJSON from "../assets/data/projects.json";

const Show = () => {
  const [projects] = useState(projectsJSON);
  const { slug } = useParams();

  const projectList = projects.map((project) => {
    if (project.slug === slug) {
      return (
        <>
          {/* <img
            src={project.imageWide[0].path}
            alt={project.imageWide.caption}
          /> */}
        <div className="py-8">
          <h1>Insert App Image Here</h1>
        </div>

          <div className="container mx-auto px-4">
            {/* Title */}
            <div className="flex text-2xl my-2">
              <p className="me-2 font-medium">Title:</p>
              <p>{project.title}</p>
            </div>
            {/* Description */}
            <div className="flex text-xl mb-2">
              <p className="me-2 font-medium">Description:</p>
              <p>{project.description}</p>
            </div>
          </div>
        </>
      );
    }
  });

  if (!projects) return <h1>Loading...</h1>;

  return (
    <>
      <div>{projectList}</div>
    </>
  );
};

export default Show;
