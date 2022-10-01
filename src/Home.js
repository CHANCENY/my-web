import React from "react";
import Feature from "./homefiles/Feature";
import Projectcontainer from "./homefiles/Projectcontainer";
import FollowMe from "./homefiles/FollowMe";
import DataContext from "./context/DataContext";
import { useContext } from "react";

function Home() {
  const { backgroundImage } = useContext(DataContext);

  let img = "";
  //extracte background data
  backgroundImage.forEach((element) => {
    img = element.imageData;
  });

  const lineStylesHeader = {
    marginTop: "1rem",
    color: "rgb(250,250,250)",
    backgroundImage: `url(${img})`,
  };

  const lineStyles = { opacity: "0.1", backgroundcolor: "rgb(250,250,250)" };
  return (
    <>
      <section
        data-bs-version="5.1"
        className="header1 cid-tgQsNR3JA7"
        id="header1-1"
        style={lineStylesHeader}
      >
        <div className="mbr-overlay" style={lineStyles}></div>
        <Feature />
      </section>
      <Projectcontainer />
      <FollowMe />
    </>
  );
}

export default Home;
