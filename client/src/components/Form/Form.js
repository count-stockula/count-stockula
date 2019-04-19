import React from "react";
import "./Form.css";

function Form(props) {
  let styleName = "";
  return (
    <form className={styleName} id={props.id} method={props.method} action={props.action}>
      {props.children.map(item => item)}
    </form>
  );
}

export default Form;
