import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    filterBy: [],
    sortName: false,
    sortPrice: false,
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then(res => res.json())
      .then(stocks => this.setState({ stocks: stocks }))
    // .then(stocks => console.log(stocks))
  }

  handleClick = (stock) => {
    if (this.state.portfolio.includes(stock)) {
      this.setState({
        portfolio: this.state.portfolio.filter((item) => item !== stock)
      })
    } else {
      this.setState({ portfolio: [...this.state.portfolio, stock] })
    }
  }

  handelFilterChange = (e) => {
    this.setState({ filterBy: e.target.value });
  }
  handleClickSortByName = () => {
    this.setState({ sortName: !this.state.sortName })
  }
  handleClickSortByPrice = () => {
    this.setState({ sortPrice: !this.state.sortPrice })

  }

  stockList = () => {
    return this.state.stocks.filter((stock) => this.state.portfolio.indexOf(stock) === -1)
  }

  filterStockList = () => {
    if (this.state.filterBy.length > 0) {
      if (this.state.filterBy !== 'All') {
        return this.stockList().filter((stock) => stock.type === this.state.filterBy)
      }
      return this.stockList()
    }
    return this.stockList()
  }

  SortByName = () => {
    if (this.state.sortName) {
      return this.filterStockList().sort(function (a, b) {
        let nameA = a.ticker
        let nameB = b.ticker
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
    }
    return this.filterStockList()
  }
  sortByPrice = () => {
    if (this.state.sortPrice) {
      return this.SortByName().sort(function (a, b) {
        return a.price - b.price;
      });
    }
    return this.SortByName()
  }





  render() {
    return (
      <div>
        <SearchBar
          filterBy={this.state.filterBy}
          handelFilterChange={this.handelFilterChange}
          handleClickSortByName={this.handleClickSortByName}
          sortName={this.state.sortName}
          sortPrice={this.state.sortPrice}
          handleClickSortByPrice={this.handleClickSortByPrice}
        />

        <div className="row">
          <div className="col-8">

            <StockContainer stocks={this.sortByPrice()} handleClick={this.handleClick} />

          </div>
          <div className="col-4">

            <PortfolioContainer portfolio={this.state.portfolio} handleClick={this.handleClick} />

          </div>
        </div>
      </div >
    );
  }

}

export default MainContainer;
