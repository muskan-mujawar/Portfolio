import React from "react";

export default function Skills() {
  return (
    <div id="Skill" className="pt-[5rem]">
      <div>
        <h1>Skill</h1>
        <div className="space-x-7">
          {" "}
          <div className="d-flex items-center w-full border m-2">
            {" "}
            <p>Languages</p>
            <img src="python.png" alt="python logo" className="h-[5em]" />
            <img src="javascript.png" alt="js logo" className="h-[5em]" />
            <img src="html.png" alt="html logo" className="h-[5em]" />
            <img src="css.png" alt="css logo" className="h-[5em]" />
          </div>
          <div className="d-flex items-center w-full border m-2">
            <p>Framework</p>
            <img src="bootstap.png" alt="bootstrap logo" className="h-[5em]" />

            <img src="react.png" alt="react logo" className="h-[5em]" />
            <img src="nextjs.png" alt="next.js logo" className="h-[5em]" />
            <img src="mysql.png" alt="mysql logo" className="h-[5em]" />
          </div>
          <div className="d-flex items-center w-full border m-2">
            <p>Miscellaneous</p>
            <img src="figma.png" alt="figma logo" className="h-[5em]" />
          </div>
        </div>
      </div>
    </div>
  );
}
