import React, { useEffect, useState } from "react";
import "./AllProducts.scss";
import ProductCard from "../ProductCard/ProductCard";
import SideBar from "../../Layout/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../../store/features/products-actions";
import { productsActions } from "../../../store/features/products-slice";

const AllProducts = () => {
  const isUpdated = useSelector((state) => state.products.changed);
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isUpdated) {
      alert("Update data");
      dispatch(productsActions.updateProducts());
      console.log({ updated: products });
    } else {
      alert("Fetch all data");
      dispatch(fetchAllProducts());
      console.log({ fetched: products });
    }
  }, [dispatch]);

  useEffect(() => {
    console.log(isUpdated);
  }, []);

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
