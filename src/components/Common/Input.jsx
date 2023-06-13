import React, { useEffect, useId, useRef } from "react";
import "./Input_TextArea.scss";

const Input = (props) => {
  const {
    onChangeValue,
    type = "text",
    name,
    placeholder,
    label,
    value,
    focus = false,
  } = props;

  const id = useId();
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current === null || !focus) {
      return;
    }

    inputRef.current.focus();
  }, [focus]);

  const onChange = (event) => {
    onChangeValue(event.target.name, event.target.value);
  };
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        onChange={onChange}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        ref={inputRef}
      />
    </div>
  );
};

export default Input;
