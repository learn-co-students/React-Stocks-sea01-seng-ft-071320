import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  renderPortfolio = () => {
    return this.props.portfolio.map(portfolioItem => {
       return <Stock stock={portfolioItem} key={portfolioItem.id} stockAction={this.props.sellStock} />
   })
   }
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
           this.renderPortfolio() //render your portfolio stocks here
          }
      </div>
    );
  }

}

export default PortfolioContainer;
