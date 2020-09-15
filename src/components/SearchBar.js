import React from "react";

const SearchBar = (props) => {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          name="sort"
          type="radio"
          value="Alphabetically"
          checked={props.sortBy === "alphabetically"}
          onChange={props.handleSort}
        />
        Alphabetically
      </label>
      <label>
        <input
          name="sort"
          type="radio"
          value="Price"
          checked={props.sortBy === "price"}
          onChange={props.handleSort}
        />
        Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={props.handleFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
};

export default SearchBar;
