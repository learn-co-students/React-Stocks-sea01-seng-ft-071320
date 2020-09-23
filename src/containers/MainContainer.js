import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  render() {
    return (
      <div>
        <SearchBar
          changeFilter={this.props.changeFilter}
          sortStocks={this.props.sortStocks}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.props.stocks}
              addCard={this.props.addCard}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              portfolio={this.props.portfolio}
              removeCard={this.props.removeCard}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
