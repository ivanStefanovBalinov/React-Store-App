import { createSelector } from "@reduxjs/toolkit";

const productsReducerSelector = (state) => state.products;

export const productsSelector = createSelector(
  productsReducerSelector,
  (state) => state.products
);
export const productsLoading = createSelector(
  productsReducerSelector,
  ({ loading }) => loading
);
export const productsError = createSelector(
  productsReducerSelector,
  ({ error }) => error
);

export const productByIdSelector = (productId) =>
  createSelector(productByIdSelector, ({ products }) => {
    const product = products.find((product) => product.id === productId);
    if (!product) {
      return null;
    }

    return product;
  });
