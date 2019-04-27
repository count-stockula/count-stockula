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
    <>
      <input
        type={type}
        className={className}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        //onChange={props.textChangeFunc}
        disabled={disabled}
      />
      <Label htmlFor={id} className="active">
        {id}
      </Label>
      {/* <div>
        type={props.type}
        className={props.className}
        id={props.id}
        name={props.name}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        disabled={props.disabled}
        readOnly={props.readOnly}
        validate={props.validate}
        onChange={props.textChangeFunc}
      </div> */}
    </>
  );
}

export default Input;
