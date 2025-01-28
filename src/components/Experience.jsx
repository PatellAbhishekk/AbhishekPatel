import React from "react";
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
function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: javaScript,
      name: "JavaScript",
    },
    {
      id: 2,
      logo: vite,
      name: "Vite",
    },
    {
      id: 3,
      logo: Bootstrap,
      name: "boostrap",
    },
    {
      id: 4,
      logo: tailwindCss,
      name: "TailwindCss",
    },
    {
      id: 4,
      logo: SASS,
      name: "SCSS",
    },
    {
      id: 5,
      logo: Git,
      name: "Git",
    },
    {
      id: 6,
      logo: GitHub,
      name: "GitHub",
    },
    {
      id: 7,
      logo: Vercel,
      name: "Vercel",
    },
    {
      id: 8,
      logo: Notion,
      name: "Notion",
    },
    {
      id: 8,
      logo: Hono,
      name: "Hono",
    },
    {
      id: 9,
      logo: CloudFlare,
      name: "CloudFlare",
    },
    {
      id: 9,
      logo: Bun,
      name: "Bun",
    },
    {
      id: 10,
      logo: AcernityUI,
      name: "AcernityUI",
    },
    {
      id: 11,
      logo: API,
      name: "API",
    },
  ];
  return (
    <div
      id="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl mb-5">Experience</h1>
        <p className="  ">
          I've more than 2 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[150px] rounded-full"
                alt="PatellAbhishekk"
              />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
