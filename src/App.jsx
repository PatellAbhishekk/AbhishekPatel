import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import Particle from "../src/components/Particles";
import Switch from "./components/Toggle"; // Import Switch
import ConsoleDesign from "./ConsoleDesign"; // Import ConsoleDesign

function App() {
  const [theme, setTheme] = useState("light"); // 'light' is the default theme

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <ConsoleDesign /> {/* Use ConsoleDesign to print the design to console */}
      <Particle />
      <div
        className={`min-h-screen ${
          theme === "dark"
            ? "bg-gray-900 text-white"
            : "bg-slate-100 text-black"
        }`}
      >
        {/* Pass theme and toggle function to Navbar */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        {/* Pass theme to each section */}
        <Home theme={theme} />
        <About theme={theme} />
        <Project theme={theme} />
        <Experience theme={theme} />
        <Contact theme={theme} />
        <Footer theme={theme} />

        {/* Add Switch component for theme toggle */}
        <Switch toggleTheme={toggleTheme} />
      </div>
      <Toaster />
    </>
  );
}

export default App;
