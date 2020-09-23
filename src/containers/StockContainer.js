import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  buildStocks = () => {
    return this.props.stocks.map(stock => {
      return <Stock stock = {stock} key ={stock.id} stockAction={this.props.addStock}/>
    })
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.buildStocks()}
      </div>
    );
  }

}

export default StockContainer;
