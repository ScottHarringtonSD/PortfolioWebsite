import React from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="mx-auto grid place-content-center gap-2 grid-cols-3 p-2">
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
