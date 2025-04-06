import { useEffect, useState } from "react";
import "./App.css";
import AboutMe from "./AboutMe";
import HomePage from "./HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import ApplicationsPage from "./Projects/ApplicationsPage";
import GameDesignPage from "./Projects/GameDesignPage";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container: Container | undefined): Promise<void> => {
    return new Promise<void>((resolve) => {
      console.log(container);
      resolve();
    });
  };

  return (
    <Router>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      <header className="bg-gradient-to-r from-slate-700  via-slate-800 to-slate-700  text-white sticky top-0 z-10 text-font w-screen">
        <div className="max-w-5xl mx-auto flex p-4 items-center justify-between">
          <NavLink to="/">
            <h1 className="text-3xl flex text-left">Scott Harrington</h1>
          </NavLink>
          <div className="space-x-8">
            <NavLink
              to="/AboutMe"
              className="hover:opacity-60 text-l text-right "
            >
              About Me
            </NavLink>
            <NavLink
              to="/Applications"
              className="hover:opacity-60 text-l text-right "
            >
              Applications and Web Design
            </NavLink>
            <NavLink
              to="/GameDesign"
              className="hover:opacity-60 text-l text-right "
            >
              Game Design
            </NavLink>
          </div>
        </div>
      </header>

      <div className=" text-white text-font overflow-hidden">
        <div className="h-screen w-screen zindex-2 absolute bg-gradient-to-r from-slate-800  via-black to-slate-800 overflow-hidden"></div>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/Applications" element={<ApplicationsPage />} />
            <Route path="/GameDesign" element={<GameDesignPage />} />
          </Routes>
        </div>
        {init && (
          <Particles
            className="particles-bg overflow-hidden max-w-screen max-h-screen"
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "#000",
                },
                opacity: 0.01,
                position: "center",
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: false,
                    mode: "push",
                  },
                  onHover: {
                    enable: false,
                    mode: "repulse",
                  },
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 100,
                    duration: 10,
                  },
                },
              },
              particles: {
                color: {
                  value: "#94a3b8",
                },
                links: {
                  color: "#94a3b8",
                  distance: 200,
                  enable: true,
                  opacity: 0.5,
                  width: 3,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 1,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                  },
                  value: 100,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 3 },
                },
              },
              detectRetina: true,
            }}
          />
        )}
      </div>
      <footer className=" text-font bg-gradient-to-r from-slate-700  via-slate-800 to-slate-700 absolute bottom-0 mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400 w-screen h-14">
        <p className="order-2 md:order-1 mt-8 md:mt-0 mx-56 inline-flex">
          {" "}
          &copy; Scott Harrington, 2025.{" "}
        </p>
        <div className="order-1 md:order-2 mx-56">
          <a
            className="inline-flex  hover:text-white"
            href="https://github.com/scottharringtonsd"
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
                    <g id="icons" transform="translate(56.000000, 160.000000)">
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
            <span className="px-2">Github</span>
          </a>
          <a
            className="inline-flex hover:text-white"
            href="https://www.linkedin.com/in/scott-harrington-4a0645294/"
          >
            <svg
              viewBox="0 0 24 24"
              id="meteor-icon-kit__solid-linkedin"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.2857 0H1.70893C0.766071 0 0 0.776786 0 1.73036V22.2696C0 23.2232 0.766071 24 1.70893 24H22.2857C23.2286 24 24 23.2232 24 22.2696V1.73036C24 0.776786 23.2286 0 22.2857 0ZM7.25357 20.5714H3.69643V9.11786H7.25893V20.5714H7.25357ZM5.475 7.55357C4.33393 7.55357 3.4125 6.62679 3.4125 5.49107C3.4125 4.35536 4.33393 3.42857 5.475 3.42857C6.61071 3.42857 7.5375 4.35536 7.5375 5.49107C7.5375 6.63214 6.61607 7.55357 5.475 7.55357ZM20.5875 20.5714H17.0304V15C17.0304 13.6714 17.0036 11.9625 15.1821 11.9625C13.3286 11.9625 13.0446 13.4089 13.0446 14.9036V20.5714H9.4875V9.11786H12.9V10.6821H12.9482C13.425 9.78214 14.5875 8.83393 16.3179 8.83393C19.9179 8.83393 20.5875 11.2071 20.5875 14.2929V20.5714Z"
                  fill="#d1d5db"
                ></path>
              </g>
            </svg>
            <span className="px-2">LinkedIn</span>
          </a>
        </div>
      </footer>
    </Router>
  );
}

export default App;
