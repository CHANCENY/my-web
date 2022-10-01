import React from "react";
import { Link } from "react-router-dom";
import Buttonmenu from "./Buttonmenu";
import Listmenu from "./Listmenu";
import { useContext } from "react";
import DataContext from "../context/DataContext";

function Header() {
  //bringing in all data required for DataContext
  const { ownerInfo, logoImage } = useContext(DataContext);

  //style object
  const imgHeight = { height: "3rem" };
  let brandName = "Chance-Ny";

  //grabbing brand name from ownerInfo object brought from DataContext
  ownerInfo.forEach((element) => {
    brandName = element.brand;
  });

  return (
    <>
      <div className="container">
        <div className="navbar-brand">
          <span className="navbar-logo">
            <Link to="/">
              <img src={logoImage} alt="logo" style={imgHeight} />
            </Link>
          </span>
          <span className="navbar-caption-wrap">
            <Link
              to="/"
              className="navbar-caption text-black text-primary display-7"
            >
              {brandName}
            </Link>
          </span>
        </div>

        <Buttonmenu />
        <Listmenu />
      </div>
    </>
  );
}

export default Header;
