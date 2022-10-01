import React from "react";
import Titles from "./Titles";
import Me from "./Me";
import Languages from "./Languages";
import DataContext from "../context/DataContext";
import { useContext } from "react";

function AboutMe() {
  const { backgroundImage } = useContext(DataContext);

  let img = "";
  //extracte background data
  backgroundImage.forEach((element) => {
    img = element.imageData;
  });

  //this is container of all component for about page
  const lineStyle = {
    backgroundImage: `url(${img})`,
  };
  return (
    <>
      <section
        data-bs-version="5.1"
        className="gallery5 mbr-gallery cid-tgQzLzCXtt"
        id="gallery5-a"
        style={lineStyle}
      >
        <div className="mbr-overlay"></div>
        <div className="container">
          <Me />
          <Titles />
          <Languages />
        </div>
      </section>
    </>
  );
}

export default AboutMe;
