import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";

function Search() {
  //bringing in setter and function for search purposes from dataContext
  const { setSearch, handleLoader } = useContext(DataContext);

  //component that show search bar in projects page
  return (
    <div className="mb-3">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="search"
          className="form-control"
          name="search"
          placeholder="search projects"
          autoFocus
          autoComplete="true"
          autoCorrect="true"
          onChange={(e) => {
            setSearch(e.target.value);
            handleLoader(e);
          }}
        />
      </form>
    </div>
  );
}

export default Search;
