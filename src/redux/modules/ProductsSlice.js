import { createSlice } from "@reduxjs/toolkit";
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
    resetPrice: () => {
      return initialState;
    },
  },
});

export default products.reducer;

export const { sortPrice, resetPrice } = products.actions;
