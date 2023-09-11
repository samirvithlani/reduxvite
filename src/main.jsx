import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import combineReducer from "./actions/index";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(combineReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store} >
    <App />
  </Provider>
);
