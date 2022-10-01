import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";

function Listmenu() {
  //bringing resume link and type from DataContext
  const { resumeDocument } = useContext(DataContext);

  //object of url path of nav list
  const pagesNames = [
    { id: 0, page: "About Me", links: "/about" },
    { id: 1, page: "Projects", links: "/projects" },
    { id: 2, page: "Contacts", links: "/contacts" },
  ];

  //useless
  //let doc = new Blob([resumeDocument], { type: resumeDocumentType });

  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
        {pagesNames.map((item) => (
          <li className="nav-item" key={item.id}>
            <Link
              to={item.links}
              className="nav-link link text-black text-primary display-4"
            >
              {item.page}
            </Link>
          </li>
        ))}
        <div className="navbar-buttons mbr-section-btn">
          <a
            href={resumeDocument}
            className="btn btn-primary display-4"
            target={"_blank"}
            rel="noreferrer"
            download
          >
            Resume Download
          </a>
        </div>
      </ul>
    </div>
  );
}

export default Listmenu;
