import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {
state = {
  stocks:[],
  portfolio: [],
  stocksAll: []
}

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(stocks => this.setState({stocks: stocks, stocksAll:stocks}))
  }

  addStock = (stock) => {
    if(!this.state.portfolio.includes(stock)) {
      this.setState({portfolio: [...this.state.portfolio, stock]})
    }
  } 

  removeStock = (stock) => {
    // if(this.state.portfolio.includes(stock)) {
      let newPortfolio = this.state.portfolio.filter(item => item !== stock)
      this.setState({portfolio: newPortfolio})
    // }
  }
  sortStocks = (e) => {
    if(e.target.value === 'Alphabetically'){
      let newStocks = this.state.stocks.sort((a,b) => a.name < b.name ? -1 : 1)
      this.setState({stocks: newStocks})
    } else {
      let newStocks = this.state.stocks.sort((a,b) => a.price < b.price ? -1 : 1)
      this.setState({stocks: newStocks})
    }
  }

  filterStocks = (e) => {
    let newStocks = this.state.stocksAll.filter((item => item.type === e.target.value))
    this.setState({stocks:newStocks})
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <Header/>
        <MainContainer stocks = {this.state.stocks} portfolio = {this.state.portfolio} addStock = {this.addStock} removeStock ={this.removeStock} sortStocks={this.sortStocks} filterStocks ={this.filterStocks}/>
      </div>
    );
  }
}

export default App;
