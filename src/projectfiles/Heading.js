import React from "react";

function Heading() {
  //this component show the tile and subtitle of project page
  const title = "Projects";
  const subtitle = "These projects I have build in my training";
  return (
    <div className="mbr-section-head">
      <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
        <strong>{title}</strong>
      </h4>
      <h5 className="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-2 display-5">
        {subtitle}
      </h5>
    </div>
  );
}

export default Heading;
