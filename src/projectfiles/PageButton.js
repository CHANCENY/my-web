import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";

function PageButton() {
  //bringing in all the required setter and data variables
  const { setPageAt, pageAt, projects } = useContext(DataContext);

  //this will increment the pageAt variable of state react will adjust content based on the pageAt

  const handleNext = () => {
    if (projects.length > pageAt + 1) {
      setPageAt(pageAt + 9);
    } else if (projects.length <= pageAt + 1) {
      setPageAt(0);
    }
  };

  //done oppisite of next function
  const handlePrevious = () => {
    if (pageAt > 0) {
      setPageAt(pageAt - 9);
    } else if (pageAt <= 0) {
      setPageAt(0);
    }
  };

  //return component of buttons
  return (
    <section className="container w-100 border mt-4">
      <button className="btn btn-info" onClick={handlePrevious} id="previous">
        Previous
      </button>
      <button className="btn btn-info float-end" onClick={handleNext} id="next">
        Next
      </button>
    </section>
  );
}

export default PageButton;
