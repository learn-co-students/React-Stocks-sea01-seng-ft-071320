import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  buildStocks = () => {
    return this.props.portfolio.map(portfolioStock => {
      return <Stock stock = {portfolioStock} key ={portfolioStock.id} stockAction={this.props.removeStock}/>
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.buildStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
