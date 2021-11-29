import React from 'react';
import { withBuyStockData } from '../../hoc/withBuyStock';

const BuyStock = ({stockNum, handleAdd, handleSub}) => {
  return (
    <section>
      <header>Buy</header>
      <h1>
        How Many Stock you want to buy!!!!
        <button onClick={handleAdd}> + </button>
        <span>{stockNum}</span>
        <button onClick={handleSub}> - </button>
      </h1>
    </section>
  )
}

const BuyStockContainer = withBuyStockData(BuyStock)

export default BuyStockContainer;