import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";

function ContactInfo() {
  //this shows email and number and google map

  //bringing in ownerInfo object from Datacontext
  const { ownerInfo, setPageTitle } = useContext(DataContext);

  //variable to null
  let phone = "8699522190";
  let email = "nyasuluchance6@gmail.com";
  let address = "4141 Gbp camillia, kharar, india";

  //foreach to loop f=through all and grab the need values
  ownerInfo.forEach((element) => {
    phone = element.phone;
    email = element.email;
  });

  //setting title of window tab
  setPageTitle(`Find Me-${window.location.hostname}`);

  return (
    <div className="row justify-content-center mt-4 mb-5">
      <div className="card col-12 col-md-6">
        <div className="card-wrapper">
          <div className="image-wrapper">
            <span className="mbr-iconfont mobi-mbri-globe mobi-mbri"></span>
          </div>
          <div className="text-wrapper">
            <h6 className="card-title mbr-fonts-style mb-1 display-5">
              <strong>Phone</strong>
            </h6>
            <p className="mbr-text mbr-fonts-style display-7">
              <a href={`tel:${phone}`} className="text-primary">
                {phone}
              </a>
            </p>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="image-wrapper">
            <span className="mbr-iconfont mobi-mbri-globe mobi-mbri"></span>
          </div>
          <div className="text-wrapper">
            <h6 className="card-title mbr-fonts-style mb-1 display-5">
              <strong>Email</strong>
            </h6>
            <p className="mbr-text mbr-fonts-style display-7">
              <a href={`mailto:${email}`} className="text-primary">
                {email}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="map-wrapper col-12 col-md-6">
        <div className="google-map">
          <iframe
            title={address}
            frameBorder="0"
            style={{ border: "0" }}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCZI5F_k6S1k46ujh0SNrapM89f7mJxd30&amp;q=4141 Gbp camillia kharar india"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
