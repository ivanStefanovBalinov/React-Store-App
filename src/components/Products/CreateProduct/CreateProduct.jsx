import React from "react";
import { useNavigate } from "react-router";
import CreateEditForm from "../CreateEditForm/CreateEditForm";
import routes from "../../../utils/constants";
import { useDispatch } from "react-redux";
import { addProductAction } from "../../../store/features/products-actions";

const CreateProduct = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = (formValue) => {
    dispatch(addProductAction(formValue));
    navigation(routes.products.path);
  };
  return <CreateEditForm onSubmit={onSubmit} title="Create Product" />;
};

export default CreateProduct;
