import React from "react";
import Breed from "../Assets/breeds.png";
import Pokemon from "../Assets/pokemon.png";
import task from "../Assets/task.png";
import ContactForm from "../Assets/form.png";

function Project() {
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
      visitLink: "https://contact-froms.pages.dev/",
      sourceCodeLink: "https://github.com/PatellAbhishekk/Contact-Form",
      textColor: "text-green-500",
    },
  ];

  return (
    <div
      id="Project"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl mb-5">Projects</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(
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
                className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-110 duration-300 z-10 backdrop-blur-lg bg-transparent border-white/10 hover:bg-white/20"
                key={id}
              >
                <img
                  src={logo}
                  className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                  alt={name}
                />
                <div>
                  <span className={`${textColor} text-xl ml-2`}>{name}</span>
                  <p className={`${textColor} px-2`}>{description}</p>
                </div>
                <div className="px-6 py-4 space-x-3 justify-around">
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
                      Source code
                    </button>
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
