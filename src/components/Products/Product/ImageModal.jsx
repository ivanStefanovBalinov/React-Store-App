import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import "./ImageModal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const ImageModal = (props) => {
  const { img, title, onClickClose } = props;
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return createPortal(
    <div className="modal-images">
      <img className="modal-img" src={img} alt={title} />
      <FontAwesomeIcon
        className="close-icon"
        icon={faCircleXmark}
        onClick={onClickClose}
      />
    </div>,
    document.body
  );
};

export default ImageModal;
