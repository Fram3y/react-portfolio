import { lazy, useEffect, useState } from "react";
import projectsJSON from "../../assets/data/projects.json";
import { useNavigate, useParams } from "react-router-dom";

const Demo = () => {
  const [projects, setProjects] = useState(null);
  const { slug } = useParams();
  const Navigate = useNavigate();

  const App = (lazy = () => import(`./demos/${slug}/App`));

  if (!projects) return <h1>This project does not exist</h1>;

};

export default Demo;
