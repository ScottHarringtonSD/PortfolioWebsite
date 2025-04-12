import React from "react";
import "./App.css";

function AboutMe() {
  return (
    <div className="max-w-4xl mx-auto flex justify-center p-6 pt-9 items-center">
      <div className="">
        <h1 className="text-5xl text-center">About Me</h1>

        <p className="text-xl text-slate-200 pt-2">
          I hold a First-Class degree in Chemistry from the University of Oxford
          and have since completed comprehensive training with Dorset Software.
          Currently, I work as a software consultant at Dorset Software,
          contributing to a variety of projects that enhance my expertise across
          the entire software development lifecycle.
        </p>
        <p className="text-xl text-slate-200 pt-2">
          My technical training has primarily focused on .NET technologies,
          equipping me with backend experience in Entity Framework and ASP.NET
          Core API, as well as MVC development during training. In my
          professional career, I have collaborated with diverse clients across
          multiple industries, delivering work spanning testing, database
          design, frontend and backend development.
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
