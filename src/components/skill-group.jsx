import React from "react";

export default function SkillGroup({ header, skills }) {
  return (
    <div className="p-3">
      <h2>{header}</h2>
      {skills.map((skill) => {
        return (
          <div className="border p-2 my-2 rounded text-center">{skill}</div>
        );
      })}
    </div>
  );
}
