import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";

function ProjectLists() {
  //bringing in latest projects from DataContext
  const { latestProjects, changingDateFormat } = useContext(DataContext);

  const line = { textDecoration: "none", color: "black" };

  //looping through the laltest projects object while rendering every component generated from the loop
  return (
    <div className="row mt-4">
      {latestProjects &&
        latestProjects.map((item) => (
          <div
            className="item features-image сol-12 col-md-6 col-lg-4"
            key={item.id}
          >
            <Link to={`/view/${item.id}`} style={line}>
              <div className="item-wrapper">
                <div className="item-img">
                  <img src={item.image} alt="" title="" />
                </div>
                <div className="item-content">
                  <h5 className="item-title mbr-fonts-style display-7">
                    <strong>{item.title}</strong>
                  </h5>
                  <h6 className="item-subtitle mbr-fonts-style mt-1 display-7">
                    {item.subtitle}
                  </h6>
                  <label className="item-subtitle mbr-fonts-style mt-1 display-7">
                    {changingDateFormat(item.date)}
                  </label>
                  <p className="mbr-text mbr-fonts-style mt-3 display-7">
                    {item.description.length > 50
                      ? `${item.description.slice(0, 50)}....`
                      : item.description}
                  </p>
                </div>
                <div className="mbr-section-btn item-footer mt-2">
                  <Link
                    to={`/view/${item.id}`}
                    className="btn item-btn btn-black display-7"
                  >
                    Start Now &gt;
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default ProjectLists;
