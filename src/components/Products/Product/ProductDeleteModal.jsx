import React, { useEffect } from "react";
import "./ProductDeleteModal.scss";
import { createPortal } from "react-dom";

const ProductDeleteModal = (props) => {
  const { onConfirmClick, onCancelClick, productTitle } = props;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return createPortal(
    <div className="modal">
      <p>Are you sure that you want to remove product {productTitle} ?</p>
      <div>
        <button className="btn" onClick={onConfirmClick}>
          Confirm
        </button>
        <button className="btn" onClick={onCancelClick}>
          Cancel
        </button>
      </div>
    </div>,
    document.body
  );
};

export default ProductDeleteModal;
