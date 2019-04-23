import React from "react";
import "./Input.css";

function Input(props) {
  const {
    type,
    className,
    id,
    name,
    value,
    placeholder,
    onChange,
    disabled
  } = props;
  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type={type}
          className={className}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
    </div>
  );
}

export default Input;
