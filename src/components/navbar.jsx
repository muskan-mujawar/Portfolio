import React from "react";
import Dropdown from "./dropdown";

function Navbar() {
  return (
    <div>
      <div className="block md:hidden">
        <Dropdown />
      </div>
      <div className="pb-[3em] hidden md:block z-300 navSmall">
        {" "}
        <nav className="fixed top-0  h-[3em] w-full">
          <div className="flex justify-end space-x-6 pe-6">
            <a href="#Education">Education</a>
            <a href="#Experience">Experience</a>
            <a href="#Project">Project</a>
            <a href="#Skill">Skill</a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
