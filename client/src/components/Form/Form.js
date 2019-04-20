import React from "react";
import "./Form.css";

function Form(props) {
  const { className, id, method, action } = props;
  return (
    <form className={className} id={id} method={method} action={action}>
      {props.children.map(item => item)}
    </form>
  );
}

export default Form;
