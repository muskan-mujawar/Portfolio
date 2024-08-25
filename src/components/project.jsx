import React from "react";

export default function Project() {
  return (
    <div className="padding">
      <h1>Projects</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-white">USB to RS45 Converter</h5>

          <p className="card-text card text-white ">
            Designed a circuit taking USB as input and converts the same to
            RS485 output
          </p>
        </div>
        <div className="list-group list-group-flush lh-1">
          <p className="list-group-item card text-white border-bottom-0 lh-1">
            ICs used
          </p>
          <p className="list-group-item card text-white border-bottom-0 lh-1">
            MAX485: to convert the logic level signals from the FT232 to the
            differential RS485 signals
          </p>
          <p className="list-group-item card text-white lh-1">
            FT232: to convert USB signals to standard UART signals
          </p>
        </div>
      </div>
    </div>
  );
}
