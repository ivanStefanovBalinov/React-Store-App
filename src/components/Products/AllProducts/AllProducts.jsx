import React, { useEffect } from "react";
import "./AllProducts.scss";
import ProductCard from "../ProductCard/ProductCard";
import SideBar from "../../Layout/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { productsSelector } from "../../../store/features/productsSelectors";
import { fetchAllProducts } from "../../../store/features/productsAsyncActions";
const AllProducts = () => {
  const products = useSelector(productsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts);
  }, [dispatch]);

  return (
    <div className="allProducts-page-wrapper">
      <SideBar />
      <h1>All Products</h1>
      <section>
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </section>
    </div>
  );
};

export default AllProducts;
