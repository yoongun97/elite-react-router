import { createSlice } from "@reduxjs/toolkit";

let cartProducts = createSlice({
  name: "cartProducts",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});
export default cartProducts.reducer;
export const { addToCart } = cartProducts.actions;
