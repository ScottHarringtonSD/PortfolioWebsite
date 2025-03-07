import React, { useEffect, useState } from "react";
import "./App.css";

function HomePage() {
  return (
    <div className=" h-full w-full absolute ">
      <div className=" max-w-4xl mx-auto flex justify-center p-6 pt-10 items-center mt-10">
        <div className="text-center">
          <h1 className="text-5xl text-slate-100">Scott Harrington</h1>
          <p className="text-3xl text-slate-400 p-2">Full Stack Developer</p>
          <p className="text-xl text-slate-400">
            I am a young software professional currently working in consultancy,
            with training in development, testing and application engineering.
            Welcome to my portfolio!
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
