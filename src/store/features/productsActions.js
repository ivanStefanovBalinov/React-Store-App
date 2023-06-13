import { createAction } from "@reduxjs/toolkit";
import { productsActionTypes } from "./productsActionTypes";

export const fetchProductByIdLoading = createAction(
  productsActionTypes.PRODUCTS_GET_BY_ID_LOADING
);

export const fetchProductByIdFulfilled = createAction(
  productsActionTypes.PRODUCTS_GET_BY_ID_FULFILLED
);

export const fetchProductByIdError = createAction(
  productsActionTypes.PRODUCTS_GET_BY_ID_REJECTED
);
