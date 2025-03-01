import React from "react";
import "./App.css";

function AboutMe() {
  return (
    <div className="max-w-4xl mx-auto flex justify-center p-6 pt-9 items-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">About Me</h1>

        <p className="text-xl text-slate-400 pt-2">
          After graduating with a First in Chemistry from the University of
          Oxford, I completed training with Dorset Software. I now currently
          work as a software consultant for Dorset Software, working on a
          variety of projects, helping to develop my knowledge of all parts of
          the development lifecycle.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
