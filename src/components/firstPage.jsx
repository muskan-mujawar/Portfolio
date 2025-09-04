import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";

export default function FirstPage() {
  return (
    <div>
      {" "}
      <div className="first pt-4">
        <div>
          <p className="mb-0">HI, I am </p>
          <h1>MUSKAN MUJAWAR</h1>
          <p>
            {" "}
            An undergrad student pursuing a degree in Electronics and
            Telecommunication. I'm passionate a bout web development. Apart from
            technical stuff, I am also interested in music and photography.
          </p>
          <div className="links">
            <a
              className="btn"
              href="https://www.linkedin.com/in/muskan-mujawar-231a04323/"
            >
              <IoLogoLinkedin size={20} />
            </a>
            <a className="btn" href="https://github.com/muskan-mujawar">
              <FaGithub />
            </a>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <img
              src="/photo_Nero AI_Face-min.jpeg"
              alt="my photo"
              className="image  rounded-3xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
