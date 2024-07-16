import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectCardContainer = ({ name, img, description, url }) => {
  return <ProjectCard project={{ name, img, description, url }} />;
};

export default ProjectCardContainer;
