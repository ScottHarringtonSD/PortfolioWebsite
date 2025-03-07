import React, { useCallback } from "react";
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
// @ts-ignore
import ParticleBackground from "react-particle-backgrounds";

function App() {
  const settings = {
    particle: {
      particleCount: 20,
      color: "#94a3b8",
      minSize: 20,
      maxSize: 20,
    },
    velocity: {
      minSpeed: 0.05,
      maxSpeed: 1.5,
    },
    opacity: {
      minOpacity: 0.2,
      maxOpacity: 0.8,
      opacityTransitionTime: 10000,
    },
    canvasFillSpace: true,
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
        <ParticleBackground
          settings={settings}
          className="particles-bg bg-gradient-to-r from-slate-900 via-black  to-slate-900"
        />
        {/* <ParticleBackground
          settings={settings}
          className="particles-bg bg-white"
        /> */}
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/Applications" element={<ApplicationsPage />} />
            <Route path="/GameDesign" element={<GameDesignPage />} />
          </Routes>
        </div>
      </body>
    </Router>
  );
}

export default App;
