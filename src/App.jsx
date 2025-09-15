import { useState } from "react";
import "./App.css";

import FirstPage from "./components/firstPage";
import Education from "./components/eduction";
import Experiences from "./components/experience";
import Project from "./components/project";

import data from "./components/data";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Skills from "./components/skills";

function App() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <FirstPage />
        <h1 className="inter-font ms-4 pb-3">Education</h1>
        <div>
          {data.map((education) => {
            return (
              <Education
                uName={education.uName}
                branch={education.branch}
                marks={education.marks}
                course={education.course}
                year={education.year}
                src={education.src}
              />
            );
          })}
        </div>
        <Experiences />
        <Project />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}
export default App;
