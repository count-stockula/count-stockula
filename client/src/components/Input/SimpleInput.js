import React from "react";
import "./Input.css";

function Input(props) {
  return (
        <input
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
          value={props.value}
        />
  );
}

export default Input;