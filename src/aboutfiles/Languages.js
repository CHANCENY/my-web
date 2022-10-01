import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";

function Languages() {
  //bringing in  ownerInfo object
  const { ownerInfo } = useContext(DataContext);

  //varib=able of array
  let mylanguages = [];

  //foreach to grab languages object only
  ownerInfo.forEach((element) => {
    mylanguages = element.languages;
  });

  //styles object
  const lineSty = {
    width: "10rem",
    height: "auto",
    borderRadius: "5px",
    backgroundColor: "white",
  };

  //styles object
  const lineStyles = { backgroundColor: "rgb(250, 250, 250)", color: "black" };

  // looping through all languages collecting while rendering every language component created

  return (
    <div className="row mbr-gallery mt-4" style={lineStyles}>
      {mylanguages.map((language) => (
        <div
          className="col-12 col-md-6 col-lg-3 item gallery-image"
          key={language.id}
        >
          <div
            className="item-wrapper mt-4"
            style={lineSty}
            data-toggle="modal"
            data-bs-toggle="modal"
            data-target="#tgVYcSLknv-modal"
            data-bs-target="#tgVYcSLknv-modal"
          >
            <img src={`${language.image}`} alt={language.lang} />
          </div>
          <label className="mbr-item-subtitle mbr-fonts-style mb-2 mt-2 display-7">
            {language.lang}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Languages;
