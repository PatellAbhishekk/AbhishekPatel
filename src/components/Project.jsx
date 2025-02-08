import React, { useEffect, useState } from "react";
import Breed from "../Assets/breeds.png";
import Pokemon from "../Assets/pokemon.png";
import task from "../Assets/task.png";
import ContactForm from "../Assets/form.png";
import FiskerOcean from "../Assets/fiskerOcean.jpg";
import Booker from "../Assets/Booker.jpg";
import API from "../Assets/API.png";
import RPS from "../Assets/RPS.png";
import { FaArrowDown } from "react-icons/fa";

function Project() {
  const [shuffledItems, setShuffledItems] = useState([]);

  const cardItem = [
    {
      id: 1,
      logo: Breed,
      name: "Shiba Breed Search",
      description: "Search for Shiba breed details and images.",
      visitLink: "https://shibadog.pages.dev/",
      sourceCodeLink: "https://github.com/PatellAbhishekk/Shiba",
    },
    {
      id: 2,
      logo: Pokemon,
      name: "Pokemon Search Card",
      description: "Discover Pokemon details by name and type.",
      visitLink: "https://pokemon-world.pages.dev/",
      sourceCodeLink: "https://github.com/PatellAbhishekk/pokemon-world",
      textColor: "text-red-600",
    },
    {
      id: 3,
      logo: task,
      name: "Agenda Task Manager",
      description: "A simple app to manage and track your daily tasks.",
      visitLink: "https://agendagoal.pages.dev/",
      sourceCodeLink: "https://github.com/PatellAbhishekk/Agenda",
      textColor: "text-sky-600",
    },
    {
      id: 4,
      logo: ContactForm,
      name: "Contact-Form",
      description: "A contact form with validation and email sending feature.",
      visitLink: "https://untitledform.pages.dev/",
      sourceCodeLink: "https://github.com/PatellAbhishekk/Contact-Form",
      textColor: "text-green-500",
    },
    {
      id: 5,
      logo: FiskerOcean,
      name: "Fisker-Ocean",
      description:
        "It's a modern web app built with Next.js, React, and Tailwind CSS, optimized with Turbopack",
      visitLink: "https://fisker-ocean-omega.vercel.app",
      sourceCodeLink: "https://github.com/PatellAbhishekk/Fisker-Ocean",
      textColor: "text-orange-800",
    },
    {
      id: 6,
      logo: Booker,
      name: "Booker-App",
      description:
        "It's a web application designed to help users organize and manage their books.",
      visitLink: "https://booker-app-chi.vercel.app",
      sourceCodeLink: "https://github.com/PatellAbhishekk/BookerApp",
    },
    {
      id: 7,
      logo: RPS,
      name: "RPS-Game",
      description:
        "learning React concepts like state, props, conditional rendering, and event handling",
      visitLink: "https://rpsgames.pages.dev/",
      sourceCodeLink: "https://github.com/PatellAbhishekk/RPS-Game",
      textColor: "text-orange-400",
    },
    {
      id: 8,
      logo: API,
      name: "Wakati-API",
      description:
        "Wakati's Text Intelligence Platform empowers users with comprehensive..Coming soon ",
      visitLink: "https://wakati.tech/",
      sourceCodeLink: "https://github.com/PatellAbhishekk/Wakati-API",
      textColor: "text-gray-700",
    },
  ];

  // Shuffle function
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap
    }
    return shuffled;
  };

  useEffect(() => {
    setShuffledItems(shuffleArray(cardItem)); // Shuffle on component mount
  }, []);

  return (
    <div
      id="Project"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 overflow-hidden"
    >
      <div className="text-center">
        <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
          Projects
        </h1>
        <br />
        <span className="font-semibold">Featured Projects</span>
        <br />
        <span className="text-2xl flex justify-center items-center mt-4">
          <FaArrowDown />
        </span>
        <br /> <br />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 my-5">
        {shuffledItems.map(
          ({
            id,
            logo,
            name,
            description,
            visitLink,
            sourceCodeLink,
            textColor,
          }) => (
            <div
              className={`w-full h-auto border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 transition-transform duration-300 backdrop-blur-lg bg-transparent border-white/10 flex flex-col items-center text-center`}
              key={id}
            >
              <img
                src={logo}
                className="w-[100px] h-[100px] p-1 rounded-full border-[2px] mb-4"
                alt={name}
              />
              <div className="mb-4">
                <span className={`${textColor} text-xl font-semibold block`}>
                  {name}
                </span>
                <p className={`${textColor} text-sm px-2 mt-2`}>
                  {description}
                </p>
              </div>
              <div className="flex flex-col space-y-2 mt-auto">
                <a href={visitLink} target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
                    Visit
                  </button>
                </a>
                <a
                  href={sourceCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded">
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Project;
