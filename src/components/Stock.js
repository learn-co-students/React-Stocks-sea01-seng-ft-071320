import React from "react";

const Stock = (props) => (
  <div>
    <div className="card" onClick={() => props.handleCardClick(props.stock)}>
      <div className="card-body">
        <h5 className="card-title">{props.stock.name}</h5>
        <p className="card-text">
          {props.stock.name}: {props.stock.price}
        </p>
      </div>
    </div>
  </div>
);

export default Stock;
