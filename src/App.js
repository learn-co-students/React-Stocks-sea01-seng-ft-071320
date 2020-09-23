import React, { Component } from "react";
import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";

class App extends Component {
  state = {
    stocks: [],
    portfolio: [],
    filter: "All",
    sort: "None",
  };

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then((res) => res.json())
      .then((json) => this.setState({ stocks: json }));
  }

  addCard = (stock) => {
    if (!this.state.portfolio.includes(stock)) {
    }
    this.setState({ portfolio: [...this.state.portfolio, stock] });
  };

  removeCard = (chosenStock) => {
    this.setState({
      portfolio: this.state.portfolio.filter((stock) => stock !== chosenStock),
    });
  };

  changeFilter = (category) => {
    this.setState({ filter: category });
  };

  filterStocks = () => {
    let filteredStocks = this.state.stocks;

    if (this.state.filter !== "All") {
      return (filteredStocks = this.state.stocks.filter(
        (stock) => stock.type === this.state.filter
      ));
    }
    return filteredStocks;
  };

  sortStocks = (sortOption) => {
    let sortedStocks = [...this.state.stocks];

    if (sortOption === "Price") {
      sortedStocks.sort(function (a, b) {
        return a.price - b.price;
      });
    } else {
      sortedStocks.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    }

    this.setState({ stocks: sortedStocks });
  };

  render() {
    return (
      <div>
        <Header />
        <MainContainer
          stocks={this.filterStocks()}
          addCard={this.addCard}
          removeCard={this.removeCard}
          portfolio={this.state.portfolio}
          changeFilter={this.changeFilter}
          sortStocks={this.sortStocks}
        />
      </div>
    );
  }
}

export default App;
