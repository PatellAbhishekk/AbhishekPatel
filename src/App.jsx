import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Ensure BrowserRouter is wrapping everything
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import Particle from "../src/components/Particles";
import ConsoleDesign from "./ConsoleDesign"; // Import ConsoleDesign component
import MoreProjects from "./Pages/moreProjects"; // Import the MoreProjects component

function App() {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);

  // Simulate a loading period
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <Router>
      {" "}
      {/* Wrap everything inside Router */}
      <>
        <ConsoleDesign />
        {loading && <Loader />}
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
            <Routes>
              {/* Define Routes for different sections */}
              <Route path="/" element={<Home theme={theme} />} />
              <Route path="/about" element={<About theme={theme} />} />
              <Route path="/projects" element={<Project theme={theme} />} />
              <Route path="/more-projects" element={<MoreProjects />} />{" "}
              {/* Add route for More Projects */}
              <Route
                path="/experience"
                element={<Experience theme={theme} />}
              />
              <Route path="/contact" element={<Contact theme={theme} />} />
            </Routes>
            <Footer theme={theme} />
          </div>
        )}
        <Toaster />
      </>
    </Router>
  );
}

export default App;
