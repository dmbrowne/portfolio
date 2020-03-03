import React from "react";
import Navbar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";
import ProjectsState from "../../../context/projects/projects-state";
import ProjectList from "./project-list/project-list";

const Projects = () => {
  return (
    <ProjectsState>
      <Navbar light />

      <div className="project-list">
        <div className="mt-8 mb-7 text-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-7 col-md-8">
                <h1>Actions speak louder</h1>
                <h2>Check out some of the projects that I have worked on</h2>
              </div>
            </div>
          </div>
        </div>

        <ProjectList />
      </div>

      <Footer light />
    </ProjectsState>
  );
};

export default Projects;
