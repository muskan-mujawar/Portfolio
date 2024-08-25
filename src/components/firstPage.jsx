import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";

export default function FirstPage() {
  return (
    <div className="d-flex padding shadow-lg  ">
      <img src="/photo_Nero AI_Face-min.jpeg" alt="my photo" />

      <div className="side">
        <p>I am </p>
        <h1 className="name">MUSKAN MUJAWAR</h1>
        <p>
          {" "}
          An undergrad student pursuing a degree in Electronics and
          Telecommunication. I'm passionate about web development. Apart from
          technical stuff, I am also interested in music and photography.
        </p>
        <div className="links">
          <a
            className="btn btn-dark me-2"
            target="_blank"
            href="https://www.linkedin.com/in/muskan-mujawar-231a04323/"
          >
            <IoLogoLinkedin size={20} className="me-2" />
            LinkedIn
          </a>
          <a
            className="btn btn-dark me-2"
            target="_blank"
            href="https://github.com/muskan-mujawar"
          >
            <FaGithub className="me-2" />
            GitHub
          </a>
          <a
            className="btn btn-dark"
            target="_blank"
            href="https://rxresu.me/muskanmujawar2021.etc/resume"
          >
            <FaFileAlt className="me-2" />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
