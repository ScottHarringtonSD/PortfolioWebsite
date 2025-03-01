import React from "react";
import { Project } from "./Project";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard(props: ProjectCardProps) {
  const { project } = props;
  return (
    <div className="mx-auto card max-w-sm border border-slate-500 rounded-lg shadow-lg dark:bg-slate-800 p-3">
      <img
        src={project.imageUrl}
        alt={project.name}
        className="rounded-t-lg"
      ></img>

      <h1 className="mb-2 text-2xl font-bold tracking-tight pl-2 pt-1">
        {project.name}
      </h1>

      <section className="tracking-tight pb-3 pl-2">{project.brief}</section>
    </div>
  );
}

export default ProjectCard;
