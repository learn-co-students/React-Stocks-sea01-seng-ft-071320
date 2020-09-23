import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    allStocks: [],
    portfolioList: [],
    sort: 'None',
    filterStocks: 'All'

  }

  componentDidMount(){
  
    const url = "http://localhost:3000/stocks"
    
    fetch(url)
    .then(response => response.json())
    .then(stocks => {
      this.setState(
       { allStocks: stocks,
      })
      });
  }
  
  filterStockList = (filterByValue) => {
    this.setState(
      {filterStocks: filterByValue}
    )    
    
  }

  filteredStocks = () => {
    if (this.state.filterStocks !== "All"){
      return this.sortedStocks().filter(stock => {
       return stock.type === this.state.filterStocks
    })
    }
      return (this.sortedStocks())
  }

  sortStockList = (sortByValue) => {
    this.setState({
      sort: sortByValue
    }) 
  }

  sortedStocks = () => {
    let stockList = [...this.state.allStocks]
    let sortByValue = this.state.sort

    if (sortByValue === "Alphabetically")
    {
       stockList.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
    }
    else if (sortByValue === "Price"){
      stockList.sort((a, b) => {
      return b.price - a.price})

    }
    return stockList
  }

  

  addStockToPortfolio = (stock) => {
  // if the stock id is not found in the portfolio list, add it by setting state with the current state and the new stock
    if (!this.state.portfolioList.find(portStock => portStock.id === stock.id)){
      this.setState({
        portfolioList: [...this.state.portfolioList, stock]
      })
     } 
    }
  
  removeStockFromPortfolio = (stock) => {
    // filter/remove stock when stock ids match. keep non-matching for the current portfolio
      let updatedPortfolio = this.state.portfolioList.filter(portStock => portStock !== stock)

      //set new state once portfolio is updated 
      this.setState({
        portfolioList: updatedPortfolio
      })
    
  }


    render() {
      return (
      <div>
        <SearchBar
          sort={this.state.sort} // pass current sort state to control form
          filter={this.state.filterStocks} // pass current filter to control form
          sortStockList={this.sortStockList}
          filterStockList={this.filterStockList}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer
              allStocks={this.filteredStocks()}

              addStockToPortfolio={this.addStockToPortfolio}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
              portfolioList={this.state.portfolioList}
              removeStockFromPortfolio={this.removeStockFromPortfolio}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
