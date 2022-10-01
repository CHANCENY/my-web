import React from "react";

function Socialmedia() {
  const today = new Date();
  const year = today.getFullYear();

  //this displays the footer copyright words with year
  return (
    <>
      <div className="row row-copirayt">
        <p className="mbr-text mb-0 mbr-fonts-style mbr-white align-center display-7">
          © Copyright {year} All Rights Reserved.
        </p>
      </div>
    </>
  );
}

export default Socialmedia;
