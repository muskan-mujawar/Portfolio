import React from "react";

export default function Project() {
  return (
    <div id="Project">
      <h1>Project</h1>
      <div className="d-flex">
        <div className="hidden md:block content-evenly w-[10em]">
          <div className="flex justify-center items-center h-[15em] ">
            <p className="number h-[40px] w-[40px] rounded-circle flex justify-center items-center">
              1
            </p>
          </div>
          <div className="flex justify-center items-center h-[15em]">
            <p className="number h-[40px] w-[40px] rounded-circle flex justify-center items-center">
              2
            </p>
          </div>

          <div className="flex justify-center items-center h-[15em]">
            <p className="number h-[40px] w-[40px] rounded-circle flex justify-center">
              3
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col md:flex-row border rounded-xl m-4 h-[10em]">
            <div className="flex justify-center">
              <img
                src="/undraw_home-cinema_jdm1.svg"
                alt="rocket"
                className="h-[12em] w-[12em]"
              />
            </div>
            <div className="ms-4 me-4">
              <div>
                <h3> Movie App</h3>
              </div>

              <p>
                Responsive Movie App built with React.js and Fetch API, enabling
                seamless movie discovery. Enhanced user engagement, leading to a
                30% boost in session duration.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row border rounded-xl m-4 h-[10em]">
            <div className="flex justify-center">
              <img
                src="/undraw_to-the-stars_tz9v.svg"
                alt="rocket"
                className="h-[12em] w-[12em]"
              />
            </div>
            <div className="ms-4 me-4">
              <h3> Space Tourism-Multipage Website</h3>
              <p>
                Interactive React-based space tourism site with intuitive UI/UX,
                boosting engagement by 30% in the first quarter.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row border rounded-xl m-4 h-[10em]">
            <div className="flex justify-center">
              <img
                src="/plant.svg"
                alt="rocket"
                className="h-[12em] w-[12em]"
              />
            </div>
            <div className="ms-4 me-4">
              {" "}
              <h3>Therapist Website</h3>
              <p>
                Modern therapist website built with Next.js and Tailwind CSS,
                offering responsive design and smooth scroll animations.
                Showcases services, rates, and contact details for an engaging
                user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
