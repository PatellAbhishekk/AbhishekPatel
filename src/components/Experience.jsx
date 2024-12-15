import React from "react";
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import javaScript from "../Assets/Js.png";
import vite from "../Assets/vite.png";
import tailwindCss from "../Assets/tailwindCss.png";
import api from "../Assets/api.png";
function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javaScript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: vite,
      name: "Vite",
    },
    {
      id: 5,
      logo: tailwindCss,
      name: "TailwindCss",
    },
    {
      id: 6,
      logo: api,
      name: "Api",
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
