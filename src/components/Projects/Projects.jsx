import React from "react";
import Gallery from "../Gallery/Gallery";
import { slides } from "../../media/slides";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <h3 className="projects-title">Projects</h3>
      <Gallery images={slides} />
    </>
  );
};

export default Projects;
