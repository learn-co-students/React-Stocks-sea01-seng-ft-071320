import React, { Component } from "react";
import Stock from "../components/Stock";

class StockContainer extends Component {
  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.props.stocks
          .filter((stock) => stock.type === this.props.filterBy)
          .sort(this.props.sortBy)
          .map((stock) => (
            <Stock
              key={stock.id}
              {...stock}
              handleClick={this.props.buyStock}
            />
          ))}
      </div>
    );
  }
}

export default StockContainer;
