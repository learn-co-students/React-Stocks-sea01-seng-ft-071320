import React, { Component } from "react";
import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";

const ENDPOINT = "http://localhost:5500/stocks";

class App extends Component {
  state = {
    stocks: [],
    portfolio: [],
    sortBy: "alphabetically",
    filterBy: "Tech",
  };

  componentDidMount() {
    fetch(ENDPOINT)
      .then((resp) => resp.json())
      .then((stocks) => this.setState({ stocks: stocks }))
      .catch(console.log);
  }

  handleFilter = (event) => {
    this.setState({
      filterBy: event.target.value,
    });
  };

  handleSort = (event) => {
    this.setState({
      sortBy: event.target.value.toLowerCase(),
    });
  };

  buyStock = (id) => {
    const stock = this.state.stocks.find((stock) => stock.id === id);
    this.setState({
      portfolio: [...this.state.portfolio, stock],
    });
  };

  sellStock = (id) => {
    this.setState({
      portfolio: this.state.portfolio.filter((stock) => stock.id !== id),
    });
  };

  render() {
    return (
      <div>
        <Header />
        <MainContainer
          sortBy={this.state.sortBy}
          handleSort={this.handleSort}
          filterBy={this.state.filterBy}
          handleFilter={this.handleFilter}
          stocks={this.state.stocks}
          portfolio={this.state.portfolio}
          buyStock={this.buyStock}
          sellStock={this.sellStock}
        />
      </div>
    );
  }
}

export default App;
