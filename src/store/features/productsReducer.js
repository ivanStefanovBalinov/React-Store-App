import { createSlice } from "@reduxjs/toolkit";
import {
  createProduct,
  deleteProduct,
  editProduct,
  fetchAllProducts,
} from "./productsAsyncActions";
import {
  fetchProductByIdError,
  fetchProductByIdFulfilled,
  fetchProductByIdLoading,
} from "./productsActions";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  initialState: initialState,
  name: "products",
  reducers: {
    clearProductError: (state) => {
      state.error = null;
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(fetchAllProducts.pending, (state) => {
      state.loading = true;
    });

    addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });

    addCase(fetchAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });

    addCase(fetchProductByIdLoading, (state, action) => {
      state.loading = true;
    });

    addCase(fetchProductByIdFulfilled, (state, action) => {
      state.loading = false;

      const productIndex = state.products.findIndex(
        ({ id }) => id === action.payload.id
      );

      if (productIndex < 0) {
        state.products.push(action.payload);
      } else {
        state.products[productIndex] = action.payload;
      }
    });

    addCase(fetchProductByIdError, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    addCase(deleteProduct.pending, (state) => {
      state.loading = true;
    });

    addCase(deleteProduct.fulfilled, (state, action) => {
      state.products = state.products.filter(({ id }) => id !== action.payload);
    });

    addCase(deleteProduct.rejected, (state, action) => {
      state.error = action.payload;
    });

    addCase(createProduct.pending, (state) => {
      state.loading = true;
    });

    addCase(createProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products.push(action.payload);
    });

    addCase(createProduct.rejected, (state, payload) => {
      state.loading = false;
      state.error = action.payload;
    });

    addCase(editProduct.pending, (state) => {
      state.loading = true;
    });

    addCase(editProduct.fulfilled, (state, payload) => {
      state.loading = false;

      const productIndex = state.products.findIndex(
        ({ id }) => id === action.payload.id
      );

      if (productIndex > -1) {
        state.products[productIndex] = action.payload;
      }
    });

    addCase(editProduct.rejected, (state, payload) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { clearProductError } = productsSlice.actions;
export default productsSlice.reducer;
