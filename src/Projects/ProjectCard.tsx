import React from "react";
import { Project } from "./Project";
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard(props: ProjectCardProps) {
  const { project } = props;
  return (
    <div className="items-center justify-center">
      <div className="mx-auto card max-w-sm border border-slate-500 rounded-lg shadow-lg dark:bg-slate-800 p-3 card-height items-center">
        <div className="h-full w-full justify-center">
          <img
            src={project.imageUrl}
            alt={project.name}
            className="rounded-t-lg h-1/2 w-full"
          ></img>

          <div className="Opacity text-slate-400 max-h-6 pl-2 pt-1 w-full">
            {" "}
            Skills: {project.skills}
          </div>
          <h1 className="mb-2 text-2xl font-bold tracking-tight pl-2 pt-1 w-full">
            {project.name}
          </h1>

          <section className="tracking-tight pb-3 pl-2 w-full">
            {project.brief}
          </section>
          <section className="tracking-tight pb-3 pl-2 w-full">
            <ProjectModal project={project} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
