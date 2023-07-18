import { createSlice } from "@reduxjs/toolkit";

const cartProductsSlice = createSlice({
  name: "cartProducts",
  initialState: {
    selectedOption: "",
    quantity: 0,
    products: [], // 추가
  },
  reducers: {
    setProductDetails: (state, action) => {
      state.selectedOption = action.payload.option;
      state.quantity = action.payload.quantity;
    },
    addToCart: (state, action) => {
      state.products.push(action.payload);
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const product = state.products.find((p) => p.id === productId);
      if (product) {
        product.quantity += quantity;
      }
    },
  },
});

export const { setProductDetails, addToCart, updateQuantity } =
  cartProductsSlice.actions;
export default cartProductsSlice.reducer;
