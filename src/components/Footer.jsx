import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer id="Footer" className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <FaFacebook size={24} />
              <FaTwitter size={24} />
              <FaInstagram size={24} />
              <FaLinkedinIn size={24} />
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
