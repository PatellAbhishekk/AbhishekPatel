import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("education");
  const [isModalOpen, setIsModalOpen] = useState(null);

  const toggleTab = (tab) => setActiveTab(tab);
  const toggleModal = (index) =>
    setIsModalOpen(isModalOpen === index ? null : index);

  return (
    <section className="container mx-auto py-12" id="qualification">
      <div className="text-center">
        <h2 className="text-3xl font-medium mb-2 font-extrabold text-transparent bg-clip-text custom-stroke">
          Qualification
        </h2>
        <div className="flex justify-center items-center">
          <span className="text-xl text-gray-500">My personal journey</span>
        </div>
        <div className="flex justify-center items-center mt-4">
          <span className="text-2xl">
            <FaArrowDown />
          </span>{" "}
          {/* Down Arrow */}
        </div>
      </div>

      <div className="grid gap-8 mt-8">
        <div className="flex justify-evenly mb-8">
          <button
            className={`text-lg font-medium p-4 ${
              activeTab === "education" ? "text-blue-500" : "text-gray-700"
            }`}
            onClick={() => toggleTab("education")}
          >
            <span className="text-2xl mr-2">&#127891;</span> Education
          </button>
        </div>

        <div className={activeTab === "education" ? "block" : "hidden"}>
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Graduation */}
            <div>
              <h3 className="text-xl font-semibold">Graduation</h3>
              <span className="text-gray-600">
                Ramniranjan Jhunjhunwala College
              </span>
              <div className="text-sm text-gray-500">
                <span className="mr-1">&#128197;</span> 2021 - 2024
              </div>
              <button
                className="cursor-pointer text-blue-500"
                onClick={() => toggleModal(0)}
              >
                View More <span className="ml-2">&#8594;</span>
              </button>
              {isModalOpen === 0 && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                  <div className="bg-white p-8 rounded-lg max-w-sm relative">
                    <h4 className="text-xl font-semibold mb-4">
                      College Summary:
                    </h4>
                    <button
                      className="absolute top-4 right-4 cursor-pointer"
                      onClick={() => toggleModal(0)}
                    >
                      &#10005;
                    </button>
                    <p>
                      College name: Ramniranjan Jhunjhunwala College <br />
                      Qualification: BSC <br />
                      Duration: 3 Years <br />
                      Score: 8.5
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-center">
              <span className="bg-blue-500 w-4 h-4 rounded-full"></span>
              <span className="bg-blue-500 w-1 h-full mt-6"></span>
            </div>

            {/* Certification */}
            <div>
              <h3 className="text-xl font-semibold">MERN Stack Developer</h3>
              <span className="text-gray-600">
                Quality Software Technologies
              </span>
              <div className="text-sm text-gray-500">
                <span className="mr-1">&#128197;</span> 2024
              </div>
              <button
                className="cursor-pointer text-blue-500"
                onClick={() => toggleModal(1)}
              >
                View More <span className="ml-2">&#8594;</span>
              </button>
              {isModalOpen === 1 && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                  <div className="bg-white p-8 rounded-lg max-w-sm relative">
                    <h4 className="text-xl font-semibold mb-4">
                      Fullstack Developer:
                    </h4>
                    <button
                      className="absolute top-4 right-4 cursor-pointer"
                      onClick={() => toggleModal(1)}
                    >
                      &#10005;
                    </button>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">&#10004;</span>{" "}
                        Front-end: HTML, CSS, JavaScript, React, Node.js
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">&#10004;</span>{" "}
                        Back-end: MongoDB, Express.js
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
