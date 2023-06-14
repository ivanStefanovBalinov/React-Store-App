import React, { useEffect } from "react";
import "./AllProducts.scss";
import ProductCard from "../ProductCard/ProductCard";
import SideBar from "../../Layout/SideBar";
import { useFetchAllProducts } from "../../../store/features/products-hooks";

const AllProducts = () => {
  const products = useFetchAllProducts();

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
