import React from "react";
import ProjectLists from "./ProjectLists";

function Projects() {
  //show the heading on home page in projects section and this is container of all component in that section
  return (
    <div className="container">
      <div className="mbr-section-head">
        <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
          <strong>Projects</strong>
        </h4>
        <h5 className="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-2 display-5">
          Some of my projects I have worked on recently
        </h5>
      </div>
      <ProjectLists />
    </div>
  );
}

export default Projects;
