import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/products-slice";
import uiSlice from "./features/ui-slice";

export const store = configureStore({
  reducer: { products: productSlice.reducer, ui: uiSlice.reducer },
});
