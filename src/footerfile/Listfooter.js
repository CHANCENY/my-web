import React from "react";
import { Link } from "react-router-dom";

function Listfooter() {
  //this in footer it display the links of navbar
  const pagesFooter = [
    { id: 0, page: "About Me", links: "/about" },
    { id: 1, page: "Projects", links: "/projects" },
    { id: 2, page: "Contacts", links: "/contacts" },
  ];

  return (
    <>
      <div className="row row-links">
        <ul className="foot-menu">
          {pagesFooter.map((item) => (
            <li
              className="foot-menu-item mbr-fonts-style display-7"
              key={item.id}
            >
              <Link className="text-white" to={item.links}>
                {item.page}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Listfooter;
