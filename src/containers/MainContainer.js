import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    filterBy: "",
    alphabetically: false,
    price: false,
  };

  componentDidMount = () => {
    fetch("http://localhost:3000/stocks")
      .then((res) => res.json())
      .then((data) => this.setState({ stocks: data }));
  };

  handAddleClick = (props) => {
    if (!this.state.portfolio.includes(props.stock)) {
      this.setState({ portfolio: [...this.state.portfolio, props.stock] });
    }
  };

  handleRemoveClick = (props) => {
    this.setState({
      portfolio: this.state.portfolio.filter((stock) => stock !== props.stock),
    });
  };

  handleFilterChange = (e) => {
    this.setState({ filterBy: e.target.value });
  };
  handleSortChange = (e) => {
    const name = e.target.value.toLowerCase();
    this.setState({ [name]: !this.state[name] });
  };

  // stocksListToDisplay = () => {
  //   return this.filterStockList().filter(
  //     (stock) => this.state.portfolio.indexOf(stock) === -1
  //   );
  // };

  filterStockList = () => {
    if (this.state.filterBy.length > 0) {
      if (this.state.filterBy === "All") {
        return this.state.stocks;
      } else {
        return this.state.stocks.filter(
          (stock) => stock.type === this.state.filterBy
        );
      }
    }
    return this.state.stocks;
  };

  sortStockBy = () => {
    if (this.state.alphabetically === true) {
      this.filterStockList().sort(function (a, b) {
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
    if (this.state.price === true) {
      this.filterStockList().sort(function (a, b) {
        return a.price - b.price;
      });
    }
    return this.filterStockList();
  };

  render() {
    return (
      <div>
        <SearchBar
          price={this.state.price}
          alphabetically={this.state.alphabetically}
          handleSortChange={this.handleSortChange}
          handleFilterChange={this.handleFilterChange}
        />
        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.sortStockBy()}
              handleClick={this.handAddleClick}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              portfolio={this.state.portfolio}
              handleClick={this.handleRemoveClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
