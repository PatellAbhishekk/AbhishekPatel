import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import Particle from "../src/components/Particles";
import ConsoleDesign from "./ConsoleDesign";

function App() {
  const [theme, setTheme] = useState("light"); // Manage theme state

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Apply theme to body element
  useEffect(() => {
    document.body.classList.remove(theme === "light" ? "dark" : "light");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <>
      <Particle />
      <div
        className={`animated-gradient min-h-screen ${
          theme === "dark"
            ? "text-white bg-gray-900"
            : "text-black bg-slate-100"
        }`}
        onContextMenu={(e) => e.preventDefault()}
      >
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Home />
        <About />
        <Project />
        <Experience />
        <Contact />
        <Footer />
      </div>
      <Toaster />
      <ConsoleDesign />
    </>
  );
}

export default App;
