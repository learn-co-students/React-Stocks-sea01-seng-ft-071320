import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
state = {
  allStocks: [],
  stocks: [],
  portfolio: []
}

componentDidMount() {
  fetch('http://localhost:3000/stocks')
  .then(resp => resp.json())
  .then(stocks => this.setState({ stocks: stocks, allStocks: stocks}))
}

addStock = (selectedStock) => {
if(!this.state.portfolio.includes(selectedStock)) {
  this.setState({ 
    portfolio: [...this.state.portfolio, selectedStock]
  })
}
}

sellStock = (selectedStock) => {
  this.setState({
    portfolio: this.state.portfolio.filter(stock => stock !== selectedStock)
  })
}

sort = (e) => {
console.log(e.target.value)
if(e.target.value === "Alphabetically"){
  this.setState({stocks: this.state.stocks.sort((a, b) => a.name < b.name ? -1:1)})
} else {
  this.setState({stocks: this.state.stocks.sort((a, b) => a.price < b.price ? -1:1)})
}
}

search= (e) => {
console.log(e.target.value)
let newFilter = this.state.allStocks.filter(stock => stock.type === e.target.value)
this.setState({stocks : newFilter})
}
  render() {
    
    return (
      <div>
        <SearchBar search = {this.search} sort = {this.sort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer addStock = {this.addStock} stocks = {this.state.stocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} sellStock = {this.sellStock} addStock = {this.addStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
