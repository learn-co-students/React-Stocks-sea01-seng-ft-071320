import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    sortBy: "alphabetically",
    filterBy: "All",
  };

  componentDidMount = () => {
    fetch("http://localhost:3000/stocks")
      .then((res) => res.json())
      .then((stocks) => this.setState({ stocks: stocks }));
  };


  handleAddStock = (stock) => {
    if (!this.state.portfolio.includes(stock)) {
      this.setState({ portfolio: [...this.state.portfolio, stock] });
    }
  };

  handleRemoveStock = (stock) => {
    const newPortfolio = this.state.portfolio.filter((s) => s.id !== stock.id);
    this.setState({ portfolio: newPortfolio });
  };
  handleFilter = (e) => {
    this.setState({ filterBy: e.target.value });
  };

  handleSort = (e) => {
    if (e.target.value === "Price") {
      this.setState({ sortBy: "price" });
    } else {
      this.setState({ sortBy: "alphabetically" });
    }
  };

  stockFilter = () => {
    if (this.state.filterBy === "All") {
      return this.state.stocks;
    } else {
      return this.state.stocks.filter(
        (stock) => stock.type === this.state.filterBy
      );
    }
  };

  sortBy = () => {
    if (this.state.sortBy === "alphabetically") {
      return this.stockFilter().sort(function (a, b) {
        let nameA = a.ticker.toUpperCase();
        let nameB = b.ticker.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    }
    if (this.state.sortBy === "price") {
      return this.stockFilter().sort(function (a, b) {
        return a.price - b.price;
      });
    }

    return this.stockFilter();
  };

  render() {
    return (
      <div>
        <SearchBar
          handleSort={this.handleSort}
          handleFilter={this.handleFilter}
          sortBy={this.state.sortBy}
          filterBy={this.state.filterBy}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.sortBy()}
              handleStock={this.handleAddStock}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              portfolio={this.state.portfolio}
              handleStock={this.handleRemoveStock}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
