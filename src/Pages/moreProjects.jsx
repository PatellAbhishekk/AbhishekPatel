import React from "react";

function MoreProjects() {
  const additionalProjects = [
    {
      id: 1,
      name: "Weather App",
      description: "A weather app with real-time weather data.",
      visitLink: "https://weatherapp.example.com",
      sourceCodeLink: "https://github.com/PatellAbhishekk/weather-app",
    },
    {
      id: 2,
      name: "Expense Tracker",
      description: "Track your expenses with ease.",
      visitLink: "https://expensetracker.example.com",
      sourceCodeLink: "https://github.com/PatellAbhishekk/expense-tracker",
    },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <h1 className="text-3xl mb-5">More Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {additionalProjects.map(
          ({ id, name, description, visitLink, sourceCodeLink }) => (
            <div
              key={id}
              className="border-[2px] rounded-lg shadow-lg p-4 hover:scale-105 transition duration-300"
            >
              <h2 className="text-xl font-bold">{name}</h2>
              <p className="mt-2">{description}</p>
              <div className="mt-4 space-x-3">
                <a
                  href={visitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  Visit
                </a>
                <a
                  href={sourceCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded"
                >
                  Source Code
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default MoreProjects;
