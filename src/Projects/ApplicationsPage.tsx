import React from "react";
import { Project_Files } from "./ProjectFiles";
import ProjectList from "./ProjectList";

function ApplicationsPage() {
  return (
    <div>
      <h1 className="justify-items-center text-4xl content-center text-center p-5 my-5">
        Applications and Web Design
      </h1>
      <ProjectList projects={Project_Files} />
    </div>
  );
}

export default ApplicationsPage;
