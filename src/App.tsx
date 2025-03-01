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
import ProjectsPage from "./Projects/ProjectsPage";

function App() {
  return (
    <Router>
      <header className="bg-slate-800 text-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex justify-between p-4 items-center">
          <NavLink to="/">
            <h1 className="text-3xl">Scott Harrington</h1>
          </NavLink>
          <NavLink to="/AboutMe" className="hover:opacity-60 text-xl">
            About Me
          </NavLink>
          <NavLink to="/Portfolio" className="hover:opacity-60 text-xl">
            Portfolio
          </NavLink>
        </div>
      </header>

      <body className="bg-black text-white min-h-screen">
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/Portfolio" element={<ProjectsPage />} />
          </Routes>
        </div>
      </body>
    </Router>
  );
}

export default App;
