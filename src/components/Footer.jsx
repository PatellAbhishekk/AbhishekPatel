import React from "react";
import {
  FaGithubAlt,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaSquareYoutube,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer id="Footer" className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a href="https://github.com/PatellAbhishekk " target="_blank">
                <FaGithubAlt size={24} />
              </a>
              <a href="https://x.com/PatellAbhishekk" target="_blank">
                <FaTwitter size={24} className="text-blue-600" />
              </a>
              <a
                href="https://www.instagram.com/abhishekpatell24/"
                target="_blank"
              >
                <FaInstagram size={24} className="text-red-600" />
              </a>
              <a href="https://www.linkedin.com/in/patel24/" target="_blank">
                <FaLinkedinIn size={24} className="text-sky-600" />
              </a>
              <a href="https://www.youtube.com/@patel4me" target="_blank">
                <FaSquareYoutube size={24} className="text-red-600" />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; <span id="year">{new Date().getFullYear()}</span> . All
                <a
                  href="https://raw.githubusercontent.com/PatellAbhishekk/React-Portfolio/refs/heads/main/LICENSE"
                  target="_blank"
                >
                  rights reserved.
                </a>
              </p>
              <p className="text-sm">Supportive Partner ❤️ Abhishek Patel</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
