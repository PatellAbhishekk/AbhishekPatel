import React from "react";
import Wait from "./Wait";
function About() {
  return (
    <div
      id="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl mb-5">About</h1>
        <p>
          Aspiring Web developer with a passion for creating visually stunning
          and user-friendly websites.
        </p>
        <br />

        {/* Education & Training Section */}
        <div>
          <div>
            <h1 className="text-green-600 font-semibold text-xl">
              Education & Training
            </h1>
            <span>
              1. Mern FullStack Web Developer → Quality Software Technology →
              2024
              <br />
              2. Bsc in Botany → Ramnirajan Junjunwala College → 2023
            </span>
          </div>
        </div>

        <br />
        {/* Skills & Expertise Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 mb-10">
          <div className="flex-1">
            <h1 className="text-green-600 font-semibold text-xl">
              Skills & Expertise
            </h1>
            <span>
              1. Frontend Development: React.js, HTML5, CSS3, Tailwind CSS,
              Bootstrap
              <br />
              2. Backend Development: Node.js, Express.js, RESTful API design
              <br />
              3. Database: MongoDB, Mongoose ORM State Management: Redux,
              Context API Version
              <br />
              4. Control: Git, GitHub Deployment: Heroku, Vercel, Netlify, AWS,
              Cloudflare
              <br />
              5. Authentication: JWT, OAuth Testing: Jest, Postman, React
              Testing
              <br />
              6. Library Soft Skills: Problem-solving, effective communication,
              continuous learning
            </span>
          </div>
          <div className="md:ml-5 mt-5 md:mt-0">
            <Wait />
          </div>
        </div>

        {/* Other Sections */}
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          1. Developed and maintained web applications using the MERN stack
          (MongoDB, Express.js, React.js, Node.js) to create dynamic and
          responsive user interfaces and robust backend systems.
          <br />
          2. Built RESTful APIs for seamless integration between frontend and
          backend, ensuring high performance and scalability.
          <br />
          3. Deployed applications to cloud platforms like Heroku, Vercel, and
          Netlify, ensuring reliable performance and uptime.
          <br />
          4. Managed version control using Git and GitHub, enabling efficient
          collaboration and code management across teams.
          <br />
          5. Optimized frontend performance using best practices in React,
          reducing load times and enhancing user experience.
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
          <a
            href="https://skillsoft.digitalbadges.skillsoft.com/46027e79-7200-4c19-a7f6-7ce675fd76ce#acc.4YPn61hg"
            target="_blank"
            className="text-red-600"
          >
            <strong>1. Web Development Basics</strong>
          </a>
          from Springboard (by Infosys): Successfully built and deployed
          dynamic, responsive web applications using HTML, CSS, JavaScript, and
          Git, developed CRUD apps, integrated APIs, and received positive
          feedback for clean, efficient code while earning certification in Web
          Development Basics.
          <br />
          <a
            href="https://skillsoft.digitalbadges.skillsoft.com/51441f46-7db9-4a4e-9622-a207bce0e5da#acc.xYakFzwR"
            target="_blank"
            className="text-red-600"
          >
            <strong>2. JavaScript Novice to Professional</strong>
          </a>
          course by Infosys Springboard, gaining expertise in core JavaScript
          concepts, DOM manipulation, asynchronous programming, and building
          dynamic web applications with hands-on projects.
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          As a <strong>MERN Full-Stack Web Developer</strong>, my mission is to
          create efficient, scalable, and user-centric web applications by
          leveraging the power of MongoDB, Express.js, React.js, and Node.js. I
          am committed to delivering high-quality, innovative solutions that
          enhance user experience, solve real-world problems, and drive business
          growth, while continuously evolving my skills to stay at the forefront
          of web development technologies.
        </p>
      </div>
    </div>
  );
}

export default About;
