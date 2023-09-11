//combine all reducers

import { combineReducers } from "redux";
import { cartReducer } from "./Reducer";


export default combineReducers(
  //reducers will go here
  {
    cart: cartReducer
  },
  
  
);
