import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { id: 1, name: "Limon", price: 50 },
    { id: 2, name: "Melon", price: 500 },
    { id: 3, name: "Banana", price: 100 },
    { id: 4, name: "Pera", price: 80 },
    { id: 5, name: "Sandia", price: 200 },
    { id: 6, name: "Manzana", price: 350 },
    { id: 7, name: "Zanahoria", price: 15 },
  ],
  cart: [],
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCart: (state, action) => {},
    removeOneFromCart: (state, action) => {},
    removeAllFromCart: (state, action) => {},
    clearCart: (state, action) => {},
  },
});

export const { addToCart, removeOneFromCart, removeAllFromCart, clearCart } =
  shopSlice.actions;
export default shopSlice.reducer;
