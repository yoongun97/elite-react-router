import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const initialState = [
  {
    id: uuid(),
    title: "상품1",
    name: "멋진 바지",
    price: 20000,
    options: [28, 30, 32],
    likeCount: 100,
  },
  {
    id: uuid(),
    title: "상품2",
    name: "멋진 셔츠",
    price: 10000,
    options: ["small", "medium", "large"],
    likeCount: 200,
  },
  {
    id: uuid(),
    title: "상품1",
    name: "멋진 신발",
    price: 30000,
    options: [230, 240, 250, 260, 270],
    likeCount: 300,
  },
];

let products = createSlice({
  name: "products",
  initialState,
  reducers: {
    sortPrice: (state) => {
      state.sort((a, b) => a.price - b.price);
    },
    resetPrice: (state) => {
      return initialState;
    },
  },
});

export const { sortPrice } = products.actions;
export const { resetPrice } = products.actions;

const store = configureStore({
  reducer: {
    products: products.reducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        {/* html5의 history API를 이용해 UI 업데이트를 합니다. */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
