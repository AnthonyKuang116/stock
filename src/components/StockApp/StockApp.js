import React from 'react';
import { useState } from "react";
import BuyStockContainer from './BuyStock/BuyStock';
import StockCalCulatorContainer from './StockCalCulator/StockCalCulator';
import { Provider } from 'react-redux';
import { store } from "../../components/state/store"

const StockApp = () => {
  const [buyStock, setBuyStock] = useState(false);
  const [stockCalculator, setStockCalculator] = useState(false);

  const handleBuyStockPage = (event) => {
    event.preventDefault();
    setBuyStock(true);
    setStockCalculator(false);
  }

  const handleStockCalculatorPage = (event) => {
    event.preventDefault();
    setBuyStock(false);
    setStockCalculator(true);
  }
  
  return (
    <Provider store={store}>
      <div >
        <header>
          <a href="#" onClick={handleBuyStockPage} style={{marginRight: '20px'}}>Buy Stock</a>
          <a href="#" onClick={handleStockCalculatorPage}>Stock Calculator</a>
        </header>
        {buyStock ? <BuyStockContainer /> : null}
        {stockCalculator ? <StockCalCulatorContainer /> : null}
      </div>
    </Provider>
  )
}

export default StockApp;