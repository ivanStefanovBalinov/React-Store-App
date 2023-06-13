import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import routes from "../../../utils/constants";
import CreateEditForm from "../CreateEditForm/CreateEditForm";

const EditProductPage = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const navigation = useNavigate();

  const getProductId = async (productId) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    getProductId(params.productId);
  }, [params.productId]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  const onSubmit = (formValue) => {
    try {
      // fetch("https://dummyjson.com/products/1", {
      //   method: "PUT" /* or PATCH */,
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     title: "iPhone Galaxy +1",
      //   }),
      // })
      //   .then((res) => res.json())
      //   .then(console.log);

      fetch(`https://dummyjson.com/products/${params.productId}`, {
        method: "PATCH",
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
      }).then((res) => res.json());
      navigation(routes.products.path);
    } catch (error) {
      console.log({ error });
    }
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
