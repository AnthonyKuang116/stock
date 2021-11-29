import React from 'react';
import { useState } from "react";
import { withBuyStockData } from '../../hoc/withBuyStock';

const StockCalCulator = ({stockNum, handleAdd, handleSub}) => {
  const [currentStock, setCurrentStock] = useState(0);

  const handleChanged = (e) => {
    e.target.innerHTML = 'Changed';
    e.target.style.color = 'red';
  }

  const handleCalculateStock = (e) => {
    setCurrentStock(+e.target.value)
  }

  return (
    <section>
      <header>StockCalCulator</header>
      <h1 onClick={handleChanged}>How Many Stock do you have?</h1>
      <input
        type="number"
        onChange={handleCalculateStock}
        value={currentStock}
      />

      <h1>
        How Many Stock you want to buy
        <button onClick={handleAdd}>+</button>
        <span>{stockNum}</span>
        <button onClick={handleSub}>-</button>
      </h1>
      <p>You have {currentStock + stockNum} stock</p>
    </section>
  )
}

const StockCalCulatorContainer = withBuyStockData(StockCalCulator);

export default StockCalCulatorContainer;