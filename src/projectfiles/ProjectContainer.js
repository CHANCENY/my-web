import React from "react";
import Heading from "./Heading";
import ProjectDisplay from "./ProjectDisplay";
import Search from "./Search";
import PageButton from "./PageButton";

function ProjectContainer() {
  //only lapping all the companent that handles the rendering of projects together
  return (
    <section
      data-bs-version="5.1"
      className="features3 cid-tgQCg7EsdG"
      id="features3-e"
    >
      <div className="container" id="cons">
        <div id="boxdiv" className="container w-75"></div>
        <Search />
        <Heading />
        <ProjectDisplay />
        <PageButton />
      </div>
    </section>
  );
}

export default ProjectContainer;
