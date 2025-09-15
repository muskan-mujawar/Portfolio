import React from "react";

export default function Skills() {
  return (
    <div id="Skill" className="pt-[5rem]">
      <div>
        <h1 className="ms-4 pb-4 inter-font">Skill</h1>
        <div>
          <div className="skills">
            <a title="python">
              <img
                src="python.png"
                alt="python logo"
                className="h-[4em] mb-3 imgheight"
              />
            </a>
            <a title="Javascript">
              {" "}
              <img
                src="javascript.png"
                alt="js logo"
                className="h-[4em] mb-3 imgheight"
              />
            </a>
            <a title="HTML">
              {" "}
              <img
                src="html.png"
                alt="html logo"
                className="h-[4em] mb-3 imgheight"
              />
            </a>
            <a title="CSS">
              {" "}
              <img
                src="css.png"
                alt="css logo"
                className="h-[4em] mb-3 imgheight"
              />
            </a>
          </div>
          <div className="skills">
            <a title="Bootstrap">
              {" "}
              <img
                src="bootstap.png"
                alt="bootstrap logo"
                className="h-[4em] mb-3 imgheight"
              />
            </a>
            <a title="React">
              <img
                src="react.png"
                alt="react logo"
                className="h-[4em] mb-3 imgheight"
              />
            </a>
            <a title="Next.Js">
              {" "}
              <img
                src="nextjs.png"
                alt="next.js logo"
                className="h-[4em] mb-3 imgheight"
              />
            </a>
            <a title="MySQL">
              <img
                src="mysql.png"
                alt="mysql logo"
                className="h-[4em] mb-3 imgheight"
              />
            </a>
          </div>
          <div className="skills">
            <a title="Figma">
              <img
                src="figma.png"
                alt="figma logo"
                className="h-[4em] mb-3 imgheight"
              />
            </a>
            <a title="Github">
              {" "}
              <img
                src="gh.png"
                alt="github logo"
                className="h-[4em] mb-3 imgheight"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
