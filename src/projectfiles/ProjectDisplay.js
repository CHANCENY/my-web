import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";

function ProjectDisplay() {
  //bringing all required data and setter for the useState in DataContext
  const { projects, setPageTitle, pageAt, changingDateFormat } =
    useContext(DataContext);

  //giving window its title
  setPageTitle(`Projects Available-${window.location.hostname}`);

  //slicing only 9 to be displayed in project per time then will change after click next or privous buttons
  const toDisplay = projects.slice(pageAt, pageAt + 9);
  const line = { textDecoration: "none", color: "black" };

  return (
    <div className="row mt-4">
      {projects &&
        toDisplay.map((pro) => (
          <div
            className="item features-image сol-12 col-md-6 col-lg-4"
            key={pro.id}
          >
            <Link to={`/view/${pro.id}`} style={line}>
              <div className="item-wrapper">
                <div className="item-img">
                  <img src={pro.image} alt="" />
                </div>
                <div className="item-content">
                  <h5 className="item-title mbr-fonts-style display-7">
                    <strong>{pro.title}</strong>
                  </h5>
                  <h6 className="item-subtitle mbr-fonts-style mt-1 display-7">
                    {pro.subtitle}
                  </h6>
                  <label className="item-subtitle mbr-fonts-style mt-1 display-7">
                    {changingDateFormat(pro.date)}
                  </label>

                  <p className="mbr-text mbr-fonts-style mt-3 display-7">
                    {pro.description.length > 50
                      ? `${pro.description.slice(0, 50)}....`
                      : pro.description}
                  </p>
                </div>
                <div className="mbr-section-btn item-footer mt-2">
                  <Link
                    to={`/view/${pro.id}`}
                    className="btn btn-primary item-btn display-7"
                  >
                    View source code &gt;
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default ProjectDisplay;
