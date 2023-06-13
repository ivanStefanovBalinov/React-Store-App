import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchProductByIdError,
  fetchProductByIdFulfilled,
  fetchProductByIdLoading,
} from "./productsActions";
import { productsActionTypes } from "./productsActionTypes";

const fetchAll = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  console.log(data);
};

//FETCH ALL PRODUCTS
export const fetchAllProducts = createAsyncThunk(
  productsActionTypes.PRODUCTS_GET_ALL,
  () => {
    return fetchAll();
  }
);

//FETCH PRODUCT BY ID
export const fetchProductsById = (productId) => {
  return async (dispatch) => {
    try {
      dispatch(fetchProductByIdLoading());
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`
      );
      const data = await response.json();
      dispatch(fetchProductByIdFulfilled(data));
    } catch (error) {
      dispatch(fetchProductByIdError(error));
    }
  };
};

//ADD PRODUCT
export const createProduct = createAsyncThunk(
  productsActionTypes.PRODUCTS_CREATE,
  (params) => {
    const {
      title,
      brand,
      category,
      description,
      discountPercentage,
      id,
      images,
      price,
      rating,
      stock,
      thumbnail,
    } = params;

    return async () => {
      const response = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          brand: brand,
          category: category,
          description: description,
          discountPercentage: discountPercentage,
          id: id,
          images: images,
          price: price,
          rating: rating,
          stock: stock,
          thumbnail: thumbnail,
        }),
      });
      const data = response.json();
      console.log(data);
    };
  }
);

//EDIT PRODUCT

export const editProduct = createAsyncThunk(
  productsActionTypes.PRODUCTS_EDIT,
  (params) => {
    const {
      title,
      brand,
      category,
      description,
      discountPercentage,
      id,
      images,
      price,
      rating,
      stock,
      thumbnail,
      productId,
    } = params;
    return async () => {
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: title,
            brand: brand,
            category: category,
            description: description,
            discountPercentage: discountPercentage,
            id: id,
            images: images,
            price: price,
            rating: rating,
            stock: stock,
            thumbnail: thumbnail,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
    };
  }
);

//DELETE PRODUCT

export const deleteProduct = createAsyncThunk(
  productsActionTypes.PRODUCTS_DELETE,
  async (productId) => {
    try {
      await fetch(`https://dummyjson.com/products/${productId}`, {
        method: "DELETE",
      }).then((res) => res.json());
    } catch (error) {
      console.log({ error });
    }
  }
);
