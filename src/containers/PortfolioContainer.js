import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.portfolioList.map(stock => 
              <Stock 
              key={stock.id}
              stock={stock}
              moveStock={this.props.removeStockFromPortfolio} />)


          }
      </div>
    );
  }

}

export default PortfolioContainer;
