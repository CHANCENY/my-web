import React from "react";

function Titles() {
  const title = "Programming languages";
  const subtitle = "These are programming languages I know";
  const margin = { marginTop: "4rem", color: "white" };

  return (
    <div className="mbr-section-head" style={margin}>
      <h3 className="mbr-section-title mbr-fonts-style align-center m-0 display-2">
        <strong>{title}</strong>
      </h3>
      <h4 className="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-2 display-5">
        {subtitle}&nbsp;
      </h4>
    </div>
  );
}

export default Titles;
