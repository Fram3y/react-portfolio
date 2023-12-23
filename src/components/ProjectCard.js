import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => 
{
  const tags = project.tags.map((tag) => {
    return (
      <span class="inline-block bg-gray-950 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
        {tag}
      </span>
    );
  });

  return (
    <>
      <div class="max-w-sm rounded overflow-hidden shadow-lg mb-7">
        <img class="w-full h-48 bg-clip-content" src={project.images[0].path} alt=""/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{project.title}</div>
          <p class="text-gray-700 text-base mb-2">{project.description}</p>
          {/* Tags */}
          <div className="my-3">{tags}</div>
          {/* Buttons */}
          <div className="flex">
            <button class="bg-gray-950 hover:bg-gray-800 font-bold py-2 px-4 rounded me-2">
              <Link to={`/projects/${project.slug}`} className="text-white font-medium">Show More</Link>
            </button>

            <button class="bg-gray-950 hover:bg-gray-800 font-bold py-2 px-4 rounded">
              {(project.github) ? (<Link to={project.github} className="text-white font-medium">Github</Link>) : (<div className="text-white font-medium">Github Unavailable</div>)}
            </button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
