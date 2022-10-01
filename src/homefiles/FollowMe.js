import React from "react";
import FollowSocial from "./FollowSocial";

function FollowMe() {
  //container for follow me links
  return (
    <section
      data-bs-version="5.1"
      className="share3 cid-tgQvh5Qcc8"
      id="share3-3"
    >
      <div className="container">
        <div className="media-container-row">
          <div className="col-12">
            <h3 className="mbr-section-title align-center mb-3 mbr-fonts-style display-2">
              <strong>Follow Me!</strong>
            </h3>
            <FollowSocial />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FollowMe;
