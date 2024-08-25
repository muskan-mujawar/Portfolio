import { useState } from "react";
import "./App.css";
import FirstPage from "./components/firstPage";
import Education from "./components/eduction";
import Experiences from "./components/experience";
import Project from "./components/project";
import Skills from "./components/skills";
import Interest from "./components/Interest";
import data from "./components/data";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <div className="container">
        <FirstPage />
        <h1 className="padding">Education</h1>
        <div className="row row-cols-3">
          {data.map((education) => {
            return (
              <Education
                uName={education.uName}
                branch={education.branch}
                marks={education.marks}
                course={education.course}
                year={education.year}
              />
            );
          })}
        </div>
        <Experiences />
        <Project />
        <Skills />
        <Interest />
        <Footer />
      </div>
    </div>
  );
}
export default App;
