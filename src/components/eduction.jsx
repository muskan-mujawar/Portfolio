import React from "react";

function Education(props) {
  return (
    <div className="flex items-start ">
      <div className="flex flex-col items-center p-[2em] pt-2">
        <div className="w-2 h-2 bg-pink-600 z-10"></div>
      </div>

      <div className="mb-[2em] pb-3 border-b-1 rubik-font w-full ">
        <div className="md:flex justify-between">
          <div>
            <h5 className="m-0">{props.uName}</h5>
          </div>
          <div>{props.marks}</div>
        </div>
        <div className="flex">
          {" "}
          <div className="pe-2 branch">{props.course}</div>
          <div className="branch">{props.branch}</div>
        </div>

        <div className="year">{props.year}</div>
      </div>
    </div>
  );
}
export default Education;
