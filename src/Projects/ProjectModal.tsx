import React from "react";
import { Project } from "./Project";
import { useState } from "react";
import Modal from "@material-ui/core/Modal";

interface ProjectModalProps {
  project: Project;
}

function ProjectModal(props: ProjectModalProps) {
  const { project } = props;
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <button
        type="button"
        className="hover:animate-pulse"
        onClick={handleOpen}
      >
        See more &gt;&gt;
      </button>
      <Modal
        onClose={handleClose}
        open={open}
        className="h-full w-2/3 bg-slate-600 text-white absolute m-auto text-font rounded-lg overflow-auto "
      >
        <div className="flex flex-col content-center justify-center items-center">
          <h1 className="mb-2 text-5xl font-bold tracking-tight pl-2 pt-1 w-full text-center mt-9 pb-4">
            {project.name}
          </h1>
          <p className="pt-5 mx-5">{project.paragraph1}</p>
          <div className="flex justify-center w-full rounded-lg pt-8 px-10">
            <img
              src={project.imageUrl1}
              alt={project.name}
              className="rounded-lg h-auto w-auto object-contain md:object-cover"
            ></img>
          </div>
          <p className="pt-5 mx-5">{project.paragraph2}</p>
          <div className="flex justify-center w-full rounded-lg pt-8 px-8">
            <img
              src={project.imageUrl2}
              alt={project.name}
              className="rounded-lg h-auto w-auto object-contain md:object-cover"
            ></img>
          </div>
          <p className="pt-5 mx-5 pb-8">{project.paragraph3}</p>
        </div>
      </Modal>
    </div>
  );
}

export default ProjectModal;
