import React from "react";

function Search({ search, onChangeSearch }) {
  function handleChange(e) {
    onChangeSearch(e.target.value);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        value={search}
        onChange={handleChange}
        type="text"
        id="search"
        placeholder="Type a name to search..."
      />
    </div>
  );
}

export default Search;

//Create state to make input controlled
//onChange, receive callback func & pass input value
//in PlantPage, create function to filter plants.name includes input
//then pass above variable to setPlants
