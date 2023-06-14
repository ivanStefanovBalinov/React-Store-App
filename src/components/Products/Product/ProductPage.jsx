import React, { useEffect, useState } from "react";
import "./ProductPage.scss";
import { useNavigate, useParams } from "react-router";
import routes from "../../../utils/constants";
import ProductDeleteModal from "./ProductDeleteModal";
import useCalculateDiscount from "../../../hooks/useCalculateDiscount";
import ImageModal from "./ImageModal";
import { useDispatch } from "react-redux";
import {
  deleteProductAction,
  fetchProductById,
} from "../../../store/features/products-actions";
import { useFetchSingleProduct } from "../../../store/features/products-hooks";

const ProductPage = () => {
  const params = useParams();
  const navigation = useNavigate();
  const product = useFetchSingleProduct();
  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [image, setImage] = useState("");
  const calculateDiscount = useCalculateDiscount();

  useEffect(() => {
    dispatch(fetchProductById(params.productId));
  }, [dispatch]);

  if (!product || !product.images) {
    return (
      <div>
        <p>LOADING...</p>
      </div>
    );
  }

  const onClickEdit = () => {
    navigation(`/products/edit/${product.id}`);
  };

  const onClickDelete = () => {
    setShowDeleteModal(true);
  };

  const onCancelClick = () => {
    setShowDeleteModal(false);
  };

  const onConfirmClick = () => {
    dispatch(deleteProductAction(params.productId));
    navigation(routes.products.path);
  };

  return (
    <div>
      <div className="product-wrapper">
        <img
          className="thumbnail"
          src={product.thumbnail}
          alt={product.title}
        />
        <div className="img-wrapper">
          {product.images.map((img) => (
            <img
              className="images"
              src={img}
              title={img}
              key={img}
              onClick={() => {
                setShowImageModal(true);
                setImage(img);
              }}
            />
          ))}
        </div>
        <div className="description-wrapper">
          <div className="left-side-description">
            <h2>{product.title}</h2>

            <h3>Brand: {product.brand}</h3>
            <h4>Category: {product.category}</h4>
            <p>Rating: {product.rating}</p>
          </div>
          <div className="right-side-description">
            <h2>Price: {product.price}$</h2>
            <h3>
              Discounted Price:
              <strong>
                {calculateDiscount(product.price, product.discountPercentage)}$
              </strong>
            </h3>
            <h4>Discount: {product.discountPercentage}%</h4>
            <p>Stock: {product.stock}</p>
          </div>
        </div>
        <div className="description-text">
          <p>Description: {product.description}</p>
        </div>
        <div className="btn-wrapper">
          <button className="btn" onClick={onClickEdit}>
            Edit
          </button>
          <button className="btn" onClick={onClickDelete}>
            Delete
          </button>
        </div>
      </div>
      {showDeleteModal ? (
        <ProductDeleteModal
          productTitle={product.title}
          onCancelClick={onCancelClick}
          onConfirmClick={onConfirmClick}
        />
      ) : null}
      {showImageModal ? (
        <ImageModal
          img={image}
          title={title}
          onClickClose={() => {
            setShowImageModal(false);
          }}
        />
      ) : null}
    </div>
  );
};

export default ProductPage;
