import React from "react";
import { FaAlignJustify } from "react-icons/fa6";

function Dropdown() {
  return (
    <div>
      <div class="dropdown">
        <button
          class="position-fixed top-0 end-0 m-2 btn  dropdown-toggle "
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <FaAlignJustify className="icon-color" />
        </button>
        <ul class="dropdown-menu  ">
          <li>
            <a class="dropdown-item" href="/">
              Home
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#Education">
              Education
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#Experience">
              Experience
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#Project">
              Project
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#Skill">
              Skills
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
