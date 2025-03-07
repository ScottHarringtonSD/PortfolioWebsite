import React, { useCallback, useEffect, useState } from "react";
import logo from "./logo.svg";
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
import type { Container, Engine } from "@tsparticles/engine";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
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
      <header className="bg-gradient-to-r from-slate-700  via-slate-800 to-slate-700  text-white sticky top-0 z-10 text-font">
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

      <body className=" text-white min-h-screen text-font">
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
            className="particles-bg"
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "#000",
                },
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
                  value: "#475569",
                },
                links: {
                  color: "#475569",
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
      </body>
    </Router>
  );
}

export default App;
