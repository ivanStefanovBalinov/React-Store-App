import { productsActions } from "./products-slice";
import { uiActions } from "./ui-slice";

export const fetchAllProducts = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");

      if (!response.ok) {
        throw new Error("Can not fetch product's data!");
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

export const editProductAction = (productId, updatedObject) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending..",
        message: "Send product data! ",
      })
    );

    const editRequest = async () => {
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(),
        }
      );

      if (!response.ok) {
        throw new Error("Could not edit product's data!");
      }

      await response.json();
    };

    try {
      await editRequest();
      dispatch(
        productsActions.editProduct({
          id: Number(productId),
          updatedObject: updatedObject,
        })
      );
      dispatch(
        uiActions.showNotification({
          status: "fulfilled",
          title: "Success!",
          message: "Product changed  successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Edit product failed",
        })
      );
    }
  };
};

export const addProductAction = (newProduct) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending..",
        message: "Send new product data! ",
      })
    );

    const editRequest = async () => {
      const response = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error("Could not edit product's data!");
      }

      await response.json();
    };

    try {
      await editRequest();
      dispatch(productsActions.addNewProduct(newProduct));
      dispatch(
        uiActions.showNotification({
          status: "fulfilled",
          title: "Success!",
          message: "Product changed  successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Edit product failed",
        })
      );
    }
  };
};

export const getProductsByCategory = (category) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending..",
        message: "Send products request! ",
      })
    );

    const getProducts = async () => {
      const response = await fetch(
        `https://dummyjson.com/products/category/${category}`
      );

      if (!response.ok) {
        throw new Error("Could not edit product's data!");
      }

      const data = await response.json();
      return data.products;
    };

    try {
      const fetchedProducts = await getProducts();
      dispatch(productsActions.getProductsByCategory(fetchedProducts));
      dispatch(
        uiActions.showNotification({
          status: "fulfilled",
          title: "Success!",
          message: "Product fetched  successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Fetching product failed",
        })
      );
    }
  };
};
