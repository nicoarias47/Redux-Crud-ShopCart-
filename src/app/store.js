import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/task/taskSlice";
import shopReducer from "../features/shop/shopSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    shop: shopReducer,
  },
});
