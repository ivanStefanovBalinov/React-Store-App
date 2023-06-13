import React from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { product } = props;
  return (
    <div className="wrapper">
      <Link to={`/products/${product.id}`}>
        <div>
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div>
          <h2>{product.title}</h2>
          <h3> Brand: {product.brand}</h3>
          <p>Price: {product.price}$</p>
          <p>Discount: {product.discountPercentage}%</p>
          <p>Stock: {product.stock}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
