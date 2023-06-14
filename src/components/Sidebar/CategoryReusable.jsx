import React, { useEffect } from "react";
import ProductCard from "../Products/ProductCard/ProductCard";
import "../Products/AllProducts/AllProducts.scss";
import { useDispatch } from "react-redux";
import { useGetProductsByCategory } from "../../store/features/products-hooks";
import { getProductsByCategory } from "../../store/features/products-actions";

const CategoryReusable = (props) => {
  const products = useGetProductsByCategory();
  const dispatch = useDispatch();
  const { category, title } = props;

  useEffect(() => {
    dispatch(getProductsByCategory(category));
  }, [category, dispatch]);

  return (
    <div className="allProducts-page-wrapper">
      <h1>{title}</h1>
      <section>
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </section>
    </div>
  );
};

export default CategoryReusable;
