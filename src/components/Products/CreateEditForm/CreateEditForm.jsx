import React, { useState } from "react";
import uniqid from "uniqid";
import Input from "../../Common/Input";
import TextArea from "../../Common/TextArea";
import "./CreateEditForm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import routes from "../../../utils/constants";
import { useNavigate } from "react-router";

const CreateEditForm = (props) => {
  const { onSubmit, product, title } = props;
  const navigation = useNavigate();

  const [formValues, setFormValues] = useState({
    title: product?.title || "",
    brand: product?.brand || "",
    category: product?.category || "",
    discountPercentage: product?.discountPercentage || "",
    id: product?.id || uniqid(),
    images: product?.images || [],
    price: product?.price || "",
    rating: product?.rating || 0,
    stock: product?.stock || 0,
    thumbnail: product?.thumbnail || "",
    description: product?.title || "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    alert("Clicked");
    onSubmit(formValues);
  };

  const onChangeValues = (key, value) => {
    setFormValues((prevState) => ({ ...prevState, [key]: value }));
  };

  const onClickClose = () => {
    navigation(routes.products.path);
  };

  return (
    <div className="form-wrapper">
      <FontAwesomeIcon
        className="close-icon"
        icon={faCircleXmark}
        onClick={onClickClose}
      />
      <h1>{title}</h1>
      <form onSubmit={onSubmitForm}>
        <Input
          onChangeValue={onChangeValues}
          name="title"
          placeholder="Iphone 14"
          label="Product title"
          value={formValues.title}
          focus={true}
        />
        <Input
          onChangeValue={onChangeValues}
          name="brand"
          placeholder="Apple"
          label="Product Brand"
          value={formValues.brand}
        />
        <Input
          onChangeValue={onChangeValues}
          name="category"
          placeholder="Smartphone"
          label="Product category"
          value={formValues.category}
        />
        <Input
          onChangeValue={onChangeValues}
          name="discountPercentage"
          placeholder="Discount percentage"
          label="Discount"
          value={formValues.discountPercentage}
          type="number"
        />
        <Input
          onChangeValue={onChangeValues}
          name="images"
          placeholder="Images url"
          label="Images"
          value={formValues.images}
        />
        <Input
          onChangeValue={onChangeValues}
          name="price"
          placeholder="1000$"
          label="Product price"
          value={formValues.price}
          type="number"
        />
        <Input
          onChangeValue={onChangeValues}
          name="rating"
          placeholder="rate 1 - 5"
          label="Rating"
          value={formValues.rating}
          type="number"
        />
        <Input
          onChangeValue={onChangeValues}
          name="stock"
          placeholder="10"
          label="Stock"
          value={formValues.stock}
          type="number"
        />
        <Input
          onChangeValue={onChangeValues}
          name="thumbnail"
          placeholder="Thumbnail"
          label="Thumbnail"
          value={formValues.thumbnail}
        />
        <TextArea
          onChangeValue={onChangeValues}
          name="description"
          placeholder="Iphone 14 is expensive luxury smartphone"
          label="Description"
          value={formValues.description}
        />
        <button style={{ marginTop: "15px" }} type="submit" className="btn">
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateEditForm;
