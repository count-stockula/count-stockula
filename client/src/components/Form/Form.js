import React from "react";
import "./Form.css";

function Form(props) {
  const { className, id, method, action } = props;
  return (
    <div className="formContainer">
        <form className={className} id={id} method={method} action={action}>
          {props.children.map(item => item)}
        </form>
    </div>
  );
}

export default Form;
