import React from "react";

function Education(props) {
  return (
    <div>
      <div className="d-flex border m-2 p-[1rem]" id="Education">
        <img
          src={props.src}
          alt="education"
          className="border flex items-center h-[5em] "
        />

        <div className="ms-[2rem]  ">
          <div>{props.uName}</div>
          <div>{props.marks}</div>
          <div>{props.branch}</div>
          <div>{props.course}</div>
          <div>{props.year}</div>
        </div>
      </div>
    </div>
  );
}

export default Education;
