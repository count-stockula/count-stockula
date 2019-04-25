import React from "react";
import "./Input.css";
import Label from "../../components/Label/Label";

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
        <Label htmlFor={id} className="active">
          {id}
        </Label>
      </div>
    </div>
  );
}

export default Input;
