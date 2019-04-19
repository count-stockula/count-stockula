import React from "react";
import "./Form.css";

function Form(props) {
  let styleName = "";
  return (
    <form className={styleName}>
      {/*props.children.map((item)=>{return item})*/}
      {props.children}
    </form>
  );
}

export default Form;
