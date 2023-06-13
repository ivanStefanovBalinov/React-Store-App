import { createSlice, current } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "Products",
  initialState: {
    products: [],
    singleProduct: {},
    updatedProducts: [],
    changed: false,
  },
  reducers: {
    getAllProduct(state, action) {
      state.products = action.payload;
      state.changed = true;
    },
    getSingleProduct(state, action) {
      state.singleProduct = action.payload;
    },
    deleteProduct(state, action) {
      const id = action.payload;
      const filteredData = state.products.filter(
        (product) => product.id !== id
      );
      //   state.updatedProducts = [...state.updatedProducts, filteredData];
      console.log({
        id: id,
        filter: filteredData,
        initialData: current(state.products),
        updatedData: current(state.updatedProducts) || "Empty",
      });
    },
    updateProducts(state) {
      state.products = state.updatedProducts;
    },
  },
});

export const productsActions = productSlice.actions;
export default productSlice;
