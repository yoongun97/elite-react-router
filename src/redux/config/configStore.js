import { configureStore } from "@reduxjs/toolkit";
import cartProducts from "../modules/CartProducts";
import products from "../modules/ProductsSlice";

const store = configureStore({
  reducer: {
    products,
    cartProducts,
  },
});

export default store;
