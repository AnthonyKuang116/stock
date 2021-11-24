import React from 'react';
import { useState } from "react";

// export const withBuyStockData = (WrappedComponent) => {
//   return class NewComponent extends React.Component {
//     state = {
//       stockNum: 0,
//     };

//     handleAdd = () => {
//       this.setState({ stockNum: this.state.stockNum + 1 });
//     };
//     handleSub = () => {
//       this.setState({
//         stockNum: this.state.stockNum - 1 < 0 ? 0 : this.state.stockNum - 1,
//       });
//     };

//     render() {
//       return (
//         <WrappedComponent
//           stockNum={this.state.stockNum}
//           handleAdd={this.handleAdd}
//           handleSub={this.handleSub}
//         ></WrappedComponent>
//       );
//     }
//   };
// };



const withBuyStockData = (WrappedComponent) => {
  const [stockNum, setStockNum] = useState(0);

  const handleAdd = () => {
    setStockNum(stockNum + 1);
  }

  const handleSub = () => {
    if(stockNum > 0){
      setStockNum(stockNum - 1);
    }
  }
  return (
    <WrappedComponent {...{stockNum, handleAdd, handleSub}}/>
  )
}

export default withBuyStockData;