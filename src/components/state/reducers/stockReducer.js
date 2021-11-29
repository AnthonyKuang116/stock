const reducer = (state = {stockNum: 0}, action) => {
    switch (action.type) {
        case 'increment':
            return { stockNum: state.stockNum + action.payload }
        case 'decrement':
            return { stockNum: state.stockNum - action.payload }
        default:
            return state;
    }
}

export default reducer;