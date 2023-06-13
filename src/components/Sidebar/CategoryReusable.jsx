import React, { useEffect, useState } from "react";
import ProductCard from "../Products/ProductCard/ProductCard";
import "../Products/AllProducts/AllProducts.scss";

const CategoryReusable = (props) => {
  const [products, setProducts] = useState();

  const { category, title } = props;

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/category/${category}`
      );
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (!products) {
    return <p>LOADING...</p>;
  }
  return (
    <div className="allProducts-page-wrapper">
      <h1>{title}</h1>
      <section>
        {products?.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </section>
    </div>
  );
};

export default CategoryReusable;
