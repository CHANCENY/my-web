import React from "react";
import "bootstrap/dist/js/bootstrap.js";

import Listfooter from "./Listfooter";
import Socialmedia from "./Socialmedia";

function Footer() {
  //container of all component in footer

  const stylesLine = { marginTop: "10rem" };
  return (
    <section
      data-bs-version="5.1"
      className="footer3 cid-tgQvonsekQ"
      once="footers"
      id="footer3-4"
      style={stylesLine}
    >
      <div className="container">
        <div className="media-container-row align-center mbr-white">
          <Listfooter />
          <Socialmedia />
        </div>
      </div>
    </section>
  );
}

export default Footer;
