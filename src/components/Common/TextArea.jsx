import React, { useId } from "react";
import "./Input_TextArea.scss";

const TextArea = (props) => {
  const {
    onChangeValue,

    name,
    placeholder,
    label,
    value,
  } = props;

  const id = useId();

  const onChange = (event) => {
    onChangeValue(event.target.name, event.target.value);
  };
  return (
    <div className="textarea">
      <label htmlFor={id}>{label}</label>
      <textarea
        onChange={onChange}
        name={name}
        value={value}
        placeholder={placeholder}
        id={id}
      ></textarea>
    </div>
  );
};

export default TextArea;
