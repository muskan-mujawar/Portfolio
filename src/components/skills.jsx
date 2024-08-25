import React from "react";

import SkillGroup from "./skill-group";

export default function Skills() {
  return (
    <div>
      <div className="padding">
        <h1>Skills</h1>
        <div className="d-flex">
          <SkillGroup
            header={"Languages"}
            skills={["Javascript", "Python", " HTML", "CSS"]}
          />
          <SkillGroup header={"Frameworks"} skills={["Reactjs", "Bootstrap"]} />
          <SkillGroup header={"Database"} skills={["MySQL"]} />
          <SkillGroup header={"Miscellaneous"} skills={["AWS"]} />
        </div>
      </div>
    </div>
  );
}
