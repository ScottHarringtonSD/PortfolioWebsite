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

function App() {
  return (
    <Router>
      <header className="bg-slate-800 text-white sticky top-0 z-10">
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
              to="/Portfolio"
              className="hover:opacity-60 text-l text-right "
            >
              Applications and Web Design
            </NavLink>
            <NavLink
              to="/Portfolio"
              className="hover:opacity-60 text-l text-right "
            >
              Game Design
            </NavLink>
          </div>
        </div>
      </header>

      <body className="bg-black text-white min-h-screen">
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/Portfolio" element={<ApplicationsPage />} />
          </Routes>
        </div>
      </body>
    </Router>
  );
}

export default App;
