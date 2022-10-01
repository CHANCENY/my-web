import React from "react";
import { Link } from "react-router-dom";

function Missing({ page404 }) {
  document.getElementById("myPageTitle").innerText = page404;
  return (
    <div className="ms-4">
      <Link to={"/"} replace>
        <img
          src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg"
          alt="not found!"
        />
      </Link>
    </div>
  );
}

export default Missing;
