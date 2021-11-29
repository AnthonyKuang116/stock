import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from "../state/index"

export const withBuyStockData = (WrappedComponent) => {
  return () => {
    const stockNum = useSelector((state) => state.stock.stockNum);
    const dispatch = useDispatch();
    const {subtractStock, addStock, currentStockNumber} = bindActionCreators(actionCreators, dispatch)

    const handleAdd = () => {
      addStock(1);
      console.log(stockNum)
    }

    const handleSub = () => {
      if(stockNum > 0){
        subtractStock(1);
        console.log(currentStock)
      }
    }
    return(
      <WrappedComponent {...{stockNum, currentStockNumber, handleAdd, handleSub}} />
    )
  }
}

export default withBuyStockData;