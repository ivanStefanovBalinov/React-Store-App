import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "Products",
  initialState: {
    products: [],
    singleProduct: {},
    editTargetProduct: {},
    productsByCategory: [],
  },
  reducers: {
    getAllProduct(state, action) {
      state.products = action.payload;
    },
    getSingleProduct(state, action) {
      state.singleProduct = action.payload;
    },
    deleteProduct(state, action) {
      const id = Number(action.payload);
      state.products = state.products.filter((product) => product.id !== id);
    },
    editProduct(state, action) {
      const targetIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      state.products[targetIndex] = action.payload.updatedObject;
    },
    getProductById(state, action) {
      const id = Number(action.payload);
      const product = state.products.find((product) => product.id === id);
      if (product) {
        state.editTargetProduct = product;
      } else {
        return;
      }
    },
    addNewProduct(state, action) {
      const newProduct = action.payload;
      state.products.unshift(newProduct);
    },
    getProductsByCategory(state, action) {
      state.productsByCategory = action.payload;
    },
  },
});

export const productsActions = productSlice.actions;
export default productSlice;
