import React from "react";
import Header from "./Header";

function Navbar() {
  //container of all nav bar need component
  return (
    <section
      data-bs-version="5.1"
      className="menu menu2 cid-tgQsc8jEcr"
      once="menu"
      id="menu2-0"
    >
      <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
        {/* <h1>Hello world</h1> */}
        <Header />
      </nav>
    </section>
  );
}

export default Navbar;
