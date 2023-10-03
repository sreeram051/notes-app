import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearch }) => {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3em" />
      <input
        placeholder="Type to search"
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
