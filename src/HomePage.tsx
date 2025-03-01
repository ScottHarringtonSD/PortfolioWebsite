import React from "react";
import "./App.css";

function HomePage() {
  return (
    <div className="max-w-4xl mx-auto flex justify-center p-6 pt-9 items-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Scott Harrington</h1>
        <p className="text-3xl text-slate-400 p-2">Full Stack Developer</p>
        <p className="text-xl text-slate-400">
          I am a young software professional currently working in consultancy,
          with training in development, testing and application engineering.
          Welcome to my portfolio!
        </p>
      </div>
    </div>
  );
}

export default HomePage;
