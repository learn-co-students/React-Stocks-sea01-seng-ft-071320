import React from "react";

const SearchBar = (props) => {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          name="taci's help"
          type="radio"
          value="None"
          onChange={(e) => props.sortStocks(e.target.value)}
        />
        None
      </label>
      <label>
        <input
          name="taci's help"
          type="radio"
          value="Alphabetically"
          onChange={(e) => props.sortStocks(e.target.value)}
        />
        Alphabetically
      </label>
      <label>
        <input
          name="taci's help"
          type="radio"
          value="Price"
          onChange={(e) => props.sortStocks(e.target.value)}
        />
        Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => props.changeFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
};

export default SearchBar;
