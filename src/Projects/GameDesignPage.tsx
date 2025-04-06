import ProjectList from "./ProjectList";
import { Game_Project_Files } from "./GameProjectFiles";

function ApplicationsPage() {
  return (
    <div>
      <h1 className="justify-items-center text-4xl content-center text-center p-5 my-5">
        Game Design
      </h1>
      <ProjectList projects={Game_Project_Files} />
    </div>
  );
}

export default ApplicationsPage;
