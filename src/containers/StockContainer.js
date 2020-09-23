import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
  //  console.log(this.props.addStockToPortfolio)
    return (
      <div>
        <h2>Stocks</h2>
        {this.props.allStocks.map(stock => 
          <Stock 
          stock={stock}
          key={stock.id}
          moveStock={this.props.addStockToPortfolio}
          />
        )
         
        }
      </div>
    );
  }

}

export default StockContainer;
