import React, { useEffect, useState } from "react";
import javaScript from "../Assets/Js.png";
import vite from "../Assets/vite.png";
import Bootstrap from "../Assets/bootstrap.png";
import tailwindCss from "../Assets/tailwindCss.png";
import SASS from "../Assets/sass.png";
import Git from "../Assets/git.png";
import GitHub from "../Assets/github.png";
import Vercel from "../Assets/vercel.svg";
import Notion from "../Assets/notion.png";
import Hono from "../Assets/hono.png";
import CloudFlare from "../Assets/cloudflare.png";
import Bun from "../Assets/bun.svg";
import AcernityUI from "../Assets/acernityUI.png";
import API from "../Assets/api.png";
import { FaArrowDown } from "react-icons/fa";

function Experience() {
  const [shuffledItems, setShuffledItems] = useState([]);

  const cardItem = [
    { id: 1, logo: javaScript, name: "JavaScript" },
    { id: 2, logo: vite, name: "Vite" },
    { id: 3, logo: Bootstrap, name: "Bootstrap" },
    { id: 4, logo: tailwindCss, name: "TailwindCSS" },
    { id: 5, logo: SASS, name: "SCSS" },
    { id: 6, logo: Git, name: "Git" },
    { id: 7, logo: GitHub, name: "GitHub" },
    { id: 8, logo: Vercel, name: "Vercel" },
    { id: 9, logo: Notion, name: "Notion" },
    { id: 10, logo: Hono, name: "Hono" },
    { id: 11, logo: CloudFlare, name: "CloudFlare" },
    { id: 12, logo: Bun, name: "Bun" },
    { id: 13, logo: AcernityUI, name: "AcernityUI" },
    { id: 14, logo: API, name: "API" },
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
      id="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="animate-text bg-gradient-to-r from-green-700 via-blue-500 to-yellow-500 bg-clip-text text-transparent text-5xl font-black flex flex-col items-center justify-center ">
          Experiences
        </h1>
        <br />
        <p className=" flex flex-col items-center justify-center">
          I've more than 2 years of experience in below technologies.
        </p>
        <br />
        <span className="text-2xl flex justify-center items-center">
          <FaArrowDown />
        </span>{" "}
        <br /> <br />
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-7 my-3">
            {shuffledItems.map(({ id, logo, name }) => (
              <div
                className="flex flex-col items-center justify-center border-[2px] rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] shadow-md p-4 cursor-pointer hover:scale-110 duration-300"
                key={id}
              >
                <img
                  src={logo}
                  className="w-[80px] h-[80px] object-contain mb-2"
                  alt={name}
                />
                <div className="text-center text-sm font-semibold">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
