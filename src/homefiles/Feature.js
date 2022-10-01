import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";

function Feature() {
  //bringing ownerInfo object
  const { ownerInfo, setPageTitle } = useContext(DataContext);
  setPageTitle(`${window.location.hostname}`);
  //inserting owner info in component and rendering it to web
  return (
    <div className="container-fluid">
      {ownerInfo &&
        ownerInfo.map((o) => (
          <div className="row" key={o.id}>
            <div className="col-12 col-lg-5">
              <h1 className="mbr-section-title mbr-fonts-style mb-3 display-1">
                <strong>{o.brand}</strong>
              </h1>

              <p className="mbr-text mbr-fonts-style display-7">
                {o.description}
              </p>
              <div className="mbr-section-btn mt-3">
                <Link className="btn btn-secondary display-4" to="/about">
                  Read More &gt;
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Feature;
