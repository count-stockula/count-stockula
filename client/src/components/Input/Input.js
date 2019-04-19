import React from "react";
import "./Input.css";

function Input(props) {
  return (
    <input type={props.type} className={props.className} id={props.id} name={props.name} value={props.value} placeholder={props.placeholder}/>
  );
}

export default Input;
