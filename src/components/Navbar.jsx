import React, { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { FaSkullCrossbones } from "react-icons/fa";
import { Link } from "react-scroll";
import Logo from "../components/Logo";
import Toggle from "../components/Toggle";

function Navbar({ theme, toggleTheme }) {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Project" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div
      className={`max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-lg fixed top-0 left-0 right-0 z-50 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-slate-200 text-black"
      }`}
    >
      <div className="flex justify-between items-center h-16">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Logo />
          <h1 className="font-semibold text-xl cursor-pointer">
            Abhishe<span className="text-blue-500 text-2xl">k</span>
            <p className="text-sm">Web Developer</p>
          </h1>
        </div>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map(({ id, text }) => (
            <li
              className="relative group cursor-pointer hover:text-blue-700"
              key={id}
            >
              <Link
                onClick={() => setMenu(false)}
                to={text.toLowerCase()} // Match the section ID (lowercase)
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                {text}
              </Link>
              <span className="absolute bottom-0 left-0 block h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Theme Toggle (Visible only on Desktop) */}
        <div className="hidden md:block">
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        {/* Hamburger Menu */}
        <div
          onClick={() => setMenu(!menu)}
          className="cursor-pointer z-50 md:hidden"
        >
          {menu ? (
            <FaSkullCrossbones size={24} />
          ) : (
            <TiThMenuOutline size={24} />
          )}
        </div>
      </div>

      {/* Mobile Navbar */}
      {menu && (
        <div
          className={`w-full h-screen fixed top-0 left-0 z-40 flex flex-col items-center justify-center ${
            theme === "dark"
              ? "bg-gray-900 text-white"
              : "bg-slate-50 text-black"
          }`}
        >
          {/* Mobile Theme Toggle */}
          <div className="absolute top-4 left-4">
            <Toggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col items-center space-y-6 text-xl">
            {navItems.map(({ id, text }) => (
              <li
                className="relative group font-semibold cursor-pointer"
                key={id}
              >
                <Link
                  onClick={() => setMenu(false)}
                  to={text.toLowerCase()} // Match the section ID (lowercase)
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  className={`${
                    theme === "dark" ? "text-white" : "text-gray-700"
                  } group-hover:text-blue-600`}
                >
                  {text}
                </Link>
                <span className="absolute bottom-0 left-0 block h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
