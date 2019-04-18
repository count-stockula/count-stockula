import React from "react";
import "./Form.css";

import Input from "../../components/Input/Input";

function Form(props) {
  return (
    <form>
      {props.children.map(() => {<Input/>})}
    </form>
  );
}

export default Form;
