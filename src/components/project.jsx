import React from "react";

export default function Project() {
  return (
    <div id="Project">
      <h1 className="ms-4 inter-font">Project</h1>
      <div className="d-flex">
        <div className="hidden md:block content-evenly w-[10em]">
          <div className="flex justify-center items-center h-[15em] ">
            <p className="number h-[40px] w-[40px] rounded-circle circular flex justify-center items-center">
              1
            </p>
          </div>
          <div className="flex justify-center items-center h-[15em]">
            <p className="number h-[40px] w-[40px] rounded-circle circular flex justify-center items-center">
              2
            </p>
          </div>

          <div className="flex justify-center items-center h-[12em]">
            <p className="number h-[40px] w-[40px] rounded-circle circular flex justify-center items-center">
              3
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center flex-col md:flex-row  m-4 h-[29em] md:h-[12em] border-color">
            <div className="flex justify-center">
              <img
                src="/undraw_home-cinema_jdm1.svg"
                alt="rocket"
                className="ms-2 h-[15em] w-[15em]"
              />
            </div>
            <div className="ms-4 me-4 ">
              <div>
                <h3 className="rubik-font ms-4">Movie App</h3>
                <p className="space-grotesk-font ms-4">
                  Responsive Movie App built with React.js and Fetch API,
                  enabling seamless movie discovery. Enhanced user engagement,
                  leading to a 30% boost in session duration.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center flex-col md:flex-row border-color m-4 h-[29em] md:h-[12em]">
            <div className="flex justify-center">
              <img
                src="/undraw_to-the-stars_tz9v.svg"
                alt="rocket"
                className="h-[14em] w-[14em]"
              />
            </div>
            <div className="ms-4 me-4">
              <h3 className="rubik-font"> Space Tourism-Multipage Website</h3>
              <p className="space-grotesk-font">
                Interactive React-based space tourism site with intuitive UI/UX,
                boosting engagement by 30% in the first quarter.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center flex-col md:flex-row border-color m-4 h-[29em] md:h-[12em]">
            <div className="flex justify-center">
              <img
                src="/plant.svg"
                alt="rocket"
                className="ms-1 h-[17em] w-[17sem]"
              />
            </div>
            <div className="ms-4 me-4">
              {" "}
              <h3 className="rubik-font" s>
                Therapist Website
              </h3>
              <p className="space-grotesk-font">
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
