import { combineReducers } from "redux";
import reducer from "./stockReducer";

const reducers = combineReducers({
    stock: reducer
})

export default reducers;