export const subtractStock = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "decrement",
            payload: amount
        })
    }
}

export const addStock = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "increment",
            payload: amount
        })
    }
}