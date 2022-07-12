import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import App from "./App";

import cartReducer from "./utils/slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
