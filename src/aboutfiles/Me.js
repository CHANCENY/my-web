import React from "react";
import myImage from "../assets/images/4.jpg";
import { useContext } from "react";
import DataContext from "../context/DataContext";

function Me() {
  //bringng in need data and setter
  const { ownerInfo, setPageTitle } = useContext(DataContext);

  //variables
  let mineImage = myImage;
  let myName = "Chance nyasulu";
  let myDescription = "none";

  //foreach loop to grab needed values and set to variable above
  ownerInfo.forEach((element) => {
    mineImage = element.image;
    myName = element.name;
    myDescription = element.description;
  });

  //setting window tab title
  setPageTitle(myName);

  return (
    <section
      data-bs-version="5.1"
      className="image1 cid-tgQxVPbsvO"
      id="image1-7"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-5">
            <div className="image-wrapper">
              <img src={mineImage} alt="" />
              <p className="mbr-description mbr-fonts-style pt-2 align-center display-4"></p>
            </div>
          </div>
          <div className="col-12 col-lg">
            <div className="text-wrapper">
              <h3 className="mbr-section-title mbr-fonts-style mb-3 display-5">
                <strong>{myName}&nbsp;</strong>
              </h3>
              <p className="mbr-text mbr-fonts-style display-7">
                {myDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Me;
