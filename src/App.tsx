import React from "react";
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

function App() {
  return (
    <Router>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      <header className="bg-slate-800 text-white sticky top-0 z-10 roboto-slab-text">
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

      <body className="bg-black text-white min-h-screen roboto-slab-text">
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
