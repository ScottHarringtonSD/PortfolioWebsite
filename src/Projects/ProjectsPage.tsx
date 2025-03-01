import React from "react";
import { Project_Files } from "./ProjectFiles";
import ProjectList from "./ProjectList";

function ProjectsPage() {
  return (
    <div>
      <h1>Portfolio</h1>
      <ProjectList projects={Project_Files} />
    </div>
  );
}

export default ProjectsPage;
