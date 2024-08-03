import React from "react";

function SearchBar({ setSearchTerm }) {
  return (
    <input
      type="text"
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search transactions"
    />
  );
}

export default SearchBar;
