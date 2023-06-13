import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/products-slice";

export const store = configureStore({
  reducer: { products: productSlice.reducer },
});
