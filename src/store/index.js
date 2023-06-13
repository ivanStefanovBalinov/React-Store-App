import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/productsReducer";

export const store = configureStore({ reducer: { products: productsReducer } });
