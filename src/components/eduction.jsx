import React from "react";

function Education(props) {
  return (
    <div className="card col">
      <div className="card-body">
        <h5 className="card-title text-white lh-1">{props.uName}</h5>
        <h6 class="card-subtitle mb-2 text-white lh-1">{props.marks}</h6>

        <p className="card-text lh-1">{props.branch}</p>
        <p className="card-text lh-1">{props.course}</p>
        <p className="card-text lh-1">{props.year}</p>
      </div>
    </div>
  );
}

export default Education;
