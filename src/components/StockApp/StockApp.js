import React from 'react';
import { useState } from "react";
import { BuyStockContainer } from './BuyStock/BuyStock';
import { StockCalCulatorContainer } from './StockCalCulator/StockCalCulator';

// class StockApp extends React.Component {
//   state = {
//     BuyStock: false,
//     StockCalCulator: false,
//   };

//   hanldeBuyStockPage = (e) => {
//     e.preventDefault();
//     this.setState({ BuyStock: true, StockCalCulator: false });
//   };
//   hanldeStockCalCulatorPage = (e) => {
//     e.preventDefault();

//     this.setState({ BuyStock: false, StockCalCulator: true });
//   };

//   render() {
//     return (
//       <div>
//         <header>
//           <a
//             href="#"
//             onClick={this.hanldeBuyStockPage}
//             style={{ marginRight: '20px' }}
//           >
//             BuyStock
//           </a>
//           <a href="#" onClick={this.hanldeStockCalCulatorPage}>
//             StockCalCulator
//           </a>
//         </header>
//         {this.state.BuyStock ? <BuyStock /> : null}
//         {this.state.StockCalCulator ? <StockCalCulator /> : null}
//       </div>
//     );
//   }
// }

// export default StockApp;

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
    <div>
      <header>
        <a href="#" onClick={handleBuyStockPage} style={{marginRight: '20px'}}>Buy Stock</a>
        <a href="#" onClick={handleStockCalculatorPage}>Stock Calculator</a>
      </header>
      {buyStock ? <BuyStockContainer /> : null}
      {stockCalculator ? <StockCalCulatorContainer /> : null}
    </div>
  )
}

export default StockApp;