import React from "react";

function Buttonmenu() {
  //for small screens like phone
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-bs-toggle="collapse"
      data-target="#navbarSupportedContent"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
}

export default Buttonmenu;
