import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import routes from "../../../utils/constants";
import CreateEditForm from "../CreateEditForm/CreateEditForm";
import { useGetProductToEdit } from "../../../store/features/products-hooks";
import { useDispatch } from "react-redux";
import { productsActions } from "../../../store/features/products-slice";
import { editProductAction } from "../../../store/features/products-actions";

const EditProductPage = () => {
  const params = useParams();
  const navigation = useNavigate();
  const product = useGetProductToEdit();
  const dispatch = useDispatch();

  dispatch(productsActions.getProductById(params.productId));

  if (!product) {
    return <h1>Loading...</h1>;
  }

  const onSubmit = (formValue) => {
    dispatch(editProductAction(params.productId, formValue));
    navigation(routes.products.path);
  };

  return (
    <CreateEditForm
      onSubmit={onSubmit}
      product={product}
      title={`Edit ${product.title}`}
    />
  );
};

export default EditProductPage;
