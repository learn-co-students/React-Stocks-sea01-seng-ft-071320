import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="checkbox" value="Alphabetically" checked={props.sortAB} onChange={props.handleClickSortByName} />
        Alphabetically
      </label>
      <label>
        <input type="checkbox" value="Price" checked={props.Price} onChange={props.handleClickSortByPrice} />
        Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={props.handelFilterChange} value={props.filterBy}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
