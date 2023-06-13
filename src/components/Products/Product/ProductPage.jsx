import React, { useCallback, useEffect, useReducer, useState } from "react";
import "./ProductPage.scss";
import { useNavigate, useParams } from "react-router";
import routes from "../../../utils/constants";
import ProductDeleteModal from "./ProductDeleteModal";
import useCalculateDiscount from "../../../hooks/useCalculateDiscount";
import ImageModal from "./ImageModal";

export const productActionTypes = {
  ADD_PRODUCT: "addProduct",
  SET_LOADING: "setLoading",
  SET_ERROR: "setError",
};

const initialState = {
  product: { images: [] },
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case productActionTypes.ADD_PRODUCT:
      return { ...state, product: action.payload };
    case productActionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    case productActionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const ProductPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const params = useParams();
  const navigation = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [image, setImage] = useState("");
  const calculateDiscount = useCalculateDiscount();

  const fetchProduct = useCallback(
    async (productId) => {
      try {
        dispatch({ type: productActionTypes.SET_LOADING, payload: true });
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`
        );
        const data = await response.json();
        console.log(data);
        dispatch({ type: productActionTypes.ADD_PRODUCT, payload: data });
      } catch (error) {
        dispatch({ type: productActionTypes.SET_ERROR, payload: error });
        navigation(routes.products.path);
      } finally {
        dispatch({ type: productActionTypes.SET_LOADING, payload: false });
      }
    },
    [navigation]
  );

  useEffect(() => {
    fetchProduct(params.productId);
  }, [params.movieId, fetchProduct]);

  if (state.loading || (!state.product && !state.error)) {
    return (
      <div>
        <p>LOADING...</p>
      </div>
    );
  }

  if (state.error) {
    return (
      <div>
        <p>{state.error}</p>
      </div>
    );
  }

  const onClickEdit = () => {
    navigation(`/products/edit/${state.product.id}`);
  };

  const onClickDelete = () => {
    setShowDeleteModal(true);
  };

  const onCancelClick = () => {
    setShowDeleteModal(false);
  };

  const onConfirmClick = async () => {
    try {
      await fetch(`https://dummyjson.com/products/${state.product.id}`, {
        method: "DELETE",
      }).then((res) => res.json());
      navigation(routes.products.path);
    } catch (error) {
      navigation(routes.products.path);
      console.log({ error });
    }
  };
  // useEffect(() => {
  //   if (state) {
  //     console.log(state);
  //   }
  // }, [state]);

  return (
    <div>
      <div className="product-wrapper">
        <img
          className="thumbnail"
          src={state.product.thumbnail}
          alt={state.product.title}
        />
        <div className="img-wrapper">
          {state?.product?.images.map((img) => (
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
            <h2>{state.product.title}</h2>

            <h3>Brand: {state.product.brand}</h3>
            <h4>Category: {state.product.category}</h4>
            <p>Rating: {state.product.rating}</p>
          </div>
          <div className="right-side-description">
            <h2>Price: {state.product.price}$</h2>
            <h3>
              Discounted Price:
              <strong>
                {calculateDiscount(
                  state.product.price,
                  state.product.discountPercentage
                )}
                $
              </strong>
            </h3>
            <h4>Discount: {state.product.discountPercentage}%</h4>
            <p>Stock: {state.product.stock}</p>
          </div>
        </div>
        <div className="description-text">
          <p>Description: {state.product.description}</p>
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
          productTitle={state.product.title}
          onCancelClick={onCancelClick}
          onConfirmClick={onConfirmClick}
        />
      ) : null}
      {showImageModal ? (
        <ImageModal
          img={image}
          title={state?.title}
          onClickClose={() => {
            setShowImageModal(false);
          }}
        />
      ) : null}
    </div>
  );
};

export default ProductPage;
