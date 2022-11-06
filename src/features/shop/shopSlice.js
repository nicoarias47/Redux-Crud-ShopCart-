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
    addToCart: (state, action) => {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );

      const itemInCart = state.cart.find((item) => item.id === action.payload);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    },
    removeOneFromCart: (state, action) => {
      let itemInCart = state.cart.find((item) => item.id === action.payload);

      return itemInCart.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((product) =>
              product.id === action.payload
                ? { ...product, quantity: product.quantity - 1 }
                : product
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((product) => product.id !== action.payload),
          };

      //OTRA FORMA:
      // if (itemInCart.quantity > 1) {
      //   itemInCart.quantity -= 1;
      // }
    },
    removeAllFromCart: (state, action) => {
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };
    },
    clearCart: (state, action) => initialState,
  },
});

export const { addToCart, removeOneFromCart, removeAllFromCart, clearCart } =
  shopSlice.actions;

export default shopSlice.reducer;
