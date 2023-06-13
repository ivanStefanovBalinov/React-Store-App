import { productsActions } from "./products-slice";
import { uiActions } from "./ui-slice";

export const fetchAllProducts = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");

      if (!response.ok) {
        throw new Error("Could not fetch product's data!");
      }

      const data = await response.json();
      const products = data.products;

      return products;
    };

    try {
      const productsData = await fetchData();
      dispatch(productsActions.getAllProduct(productsData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Send products data failed",
        })
      );
    }
  };
};

export const fetchProductById = (productId) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending..",
        message: "Send product data! ",
      })
    );

    const fetchData = async () => {
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`
      );

      if (!response.ok) {
        throw new Error("Could not fetch product's data!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const product = await fetchData();
      dispatch(productsActions.getSingleProduct(product));
      dispatch(
        uiActions.showNotification({
          status: "fulfilled",
          title: "Success!",
          message: "Send product data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Send products data failed",
        })
      );
    }
  };
};

export const deleteProductAction = (productId) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending..",
        message: "Send product data! ",
      })
    );

    const deleteRequest = async () => {
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Could not delete product's data!");
      }
    };

    try {
      await deleteRequest();
      dispatch(productsActions.deleteProduct(productId));
      dispatch(
        uiActions.showNotification({
          status: "fulfilled",
          title: "Success!",
          message: "Product deleted  successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Delete products data failed",
        })
      );
    }
  };
};
