import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function FirstPage() {
  return (
    <div className="mb-[5em]">
      {" "}
      <div className="first pt-4 ms-4">
        <div>
          <p className="mb-0 space-grotesk-font">HI, i am </p>
          <h1 className="audiowide-regular">MUSKAN MUJAWAR</h1>

          <p className="space-grotesk-font">
            {" "}
            A detail-oriented engineering graduate with strong problem-solving
            skills and hands-on experience in web development and electronics.
            Eager to contribute to technical projects and deliver effective
            solutions in a professional setting.
          </p>
          <div className="links">
            <a
              className="btn"
              href="https://www.linkedin.com/in/muskan-mujawar-231a04323/"
            >
              <FaLinkedin size={25} />
            </a>
            <a className="btn p-0" href="https://github.com/muskan-mujawar">
              <FaGithubSquare size={25} />
            </a>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <img
              src="/photo_Nero AI_Face-min.jpeg"
              alt="my photo"
              className="image  rounded-xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
