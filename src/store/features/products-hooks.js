import { useSelector } from "react-redux";

export const useFetchAllProducts = () =>
  useSelector((state) => state.products.products);

export const useFetchSingleProduct = () =>
  useSelector((state) => state.products.singleProduct);

export const useGetProductToEdit = () =>
  useSelector((state) => state.products.editTargetProduct);

export const useGetProductsByCategory = () =>
  useSelector((state) => state.products.productsByCategory);

export const useGetStatus = () => useSelector((state) => state.ui.notification);
