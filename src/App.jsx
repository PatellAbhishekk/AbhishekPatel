import React, { useState, useEffect } from "react";
import Loader from "./components/Loader"; // Import your loader
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { Toaster } from "react-hot-toast";
import Particle from "../src/components/Particles";

function App() {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);

  // Simulate a 10-second loading period
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Hide the loader after 10 seconds
    }, 5000);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      {loading && <Loader />} {/* Show loader when loading */}
      {/* Only show the content when loading is false */}
      {!loading && (
        <div
          className={`min-h-screen ${
            theme === "dark"
              ? "bg-gray-900 text-white"
              : "bg-slate-200 text-black"
          }`}
        >
          <Particle />
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Home theme={theme} />
          <About theme={theme} />
          <Project theme={theme} />
          <Experience theme={theme} />
          <Contact theme={theme} />
          <Footer theme={theme} />
        </div>
      )}
      <Toaster />
    </>
  );
}

export default App;
