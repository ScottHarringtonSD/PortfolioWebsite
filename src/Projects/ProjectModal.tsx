import React from "react";
import { Project } from "./Project";
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
          <p className="pt-5 mx-5 pb-3">
            <a
              className="inline-flex  hover:animate-pulse"
              href={project.githubLink}
            >
              <svg
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                className="w-4"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>github [#9ca3af]</title>{" "}
                  <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    {" "}
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-140.000000, -7559.000000)"
                      fill="#9ca3af"
                    >
                      {" "}
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        {" "}
                        <path
                          d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                          id="github-[#9ca3af]"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              <span className="px-2">See the code here &gt;&gt;</span>
            </a>
          </p>
          {project.projectLink && (
            <a
              className="px-2 hover:animate-pulse inline-flex"
              href={project.projectLink}
            >
              <span className="px-2 pb-8">
                Check out the application here &gt;&gt;
              </span>
            </a>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default ProjectModal;
