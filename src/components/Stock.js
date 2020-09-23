import React from 'react'

// const Stock = (props) => (
const Stock = ({
  stock,
  moveStock,
  stock: {name, ticker, price, id}}) => (
  
  <div>
    <div className="card" 
    onClick={() => moveStock(stock)}
    >
      <div className="card-body">
        <h5 className="card-title">
          {name }   
          </h5>
        <p className="card-text">
          {ticker}:  {price}
          </p>
      </div>
    </div>


  </div>
);

export default Stock


// { "id": 1,
//       "ticker" :"GOOG",
//       "name": "Google",
//       "type": "Tech",
//       "price": 1194.80