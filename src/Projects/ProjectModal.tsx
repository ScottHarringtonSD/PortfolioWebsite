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
      <button type="button" onClick={handleOpen}>
        See more &gt;&gt;
      </button>
      <Modal
        onClose={handleClose}
        open={open}
        className="h-full w-2/3 bg-slate-600 text-white absolute m-auto roboto-slab-text"
      >
        <div className="flex flex-col content-center justify-center items-center">
          <h1 className="mb-2 text-5xl font-bold tracking-tight pl-2 pt-1 w-full text-center mt-9 pb-4">
            {project.name}
          </h1>
          <div className="flex justify-center w-full">
            <img
              src={project.imageUrl}
              alt={project.name}
              className="rounded-lg h-auto w-auto "
            ></img>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ProjectModal;
