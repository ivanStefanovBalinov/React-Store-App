import React from "react";
import { useNavigate } from "react-router";
import CreateEditForm from "../CreateEditForm/CreateEditForm";
import routes from "../../../utils/constants";

const CreateProduct = () => {
  const navigation = useNavigate();

  const onSubmit = async (formValue) => {
    try {
      await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: formValue.title,
          brand: formValue.brand,
          category: formValue.category,
          description: formValue.description,
          discountPercentage: formValue.discountPercentage,
          id: formValue.id,
          images: formValue.images,
          price: formValue.price,
          rating: formValue.rating,
          stock: formValue.stock,
          thumbnail: formValue.thumbnail,
        }),
      })
        .then((res) => res.json())
        .then(console.log(formValue));
      // .then(navigation(routes.products.path));
    } catch (error) {
      console.log({ error });
    }
  };
  return <CreateEditForm onSubmit={onSubmit} title="Create Product" />;
};

export default CreateProduct;
