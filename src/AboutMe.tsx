import React from "react";
import "./App.css";

function AboutMe() {
  return (
    <div className="max-w-4xl mx-auto flex justify-center p-6 pt-9 items-center">
      <div className="">
        <h1 className="text-5xl text-center">About Me</h1>

        <p className="text-xl text-slate-200 pt-2">
          After graduating with a First in Chemistry from the University of
          Oxford, I completed training with Dorset Software. I now currently
          work as a software consultant for Dorset Software, working on a
          variety of projects, helping to develop my knowledge of all parts of
          the development lifecycle.
        </p>
        <p className="text-xl text-slate-200 pt-2">
          I have primarily received training in .NET, with backend experience
          using Entity Framework and ASP.NET Core Api and using MVC on training.
          Since then, I have worked with a diverse range in clients in a wide
          range of fields, including testing, database design, frontend and
          backend work.
        </p>
        <p className="text-xl text-slate-200 pt-2">
          Outside of professional development, I have a passion for web
          application development and game design, which you can read about on
          the other pages on this site!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
