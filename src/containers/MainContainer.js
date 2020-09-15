import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  sorts = {
    alphabetically(a, b) {
      return a.name > b.name ? 1 : -1;
    },

    price(a, b) {
      return a.price > b.price ? 1 : -1;
    },
  };

  render() {
    return (
      <div>
        <SearchBar
          sortBy={this.props.sortBy}
          handleSort={this.props.handleSort}
          handleFilter={this.props.handleFilter}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              sortBy={this.sorts[this.props.sortBy]}
              filterBy={this.props.filterBy}
              stocks={this.props.stocks}
              buyStock={this.props.buyStock}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              portfolio={this.props.portfolio}
              sellStock={this.props.sellStock}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
