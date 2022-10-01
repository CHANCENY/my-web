import React from "react";

function HeadingContats() {
  //this show title in contact page (find me)
  const title = "Find Me";
  const subtitle = "Contact me for job offering";
  return (
    <div className="mbr-section-head">
      <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
        <strong>{title}</strong>
      </h3>
      <h4 className="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-2 display-5">
        {subtitle}
      </h4>
    </div>
  );
}

export default HeadingContats;
