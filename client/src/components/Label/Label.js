import React from "react";
import "./Label.css";

function Label(props) {
  const { htmlFor, className } = props;
  return (
    <label htmlFor={htmlFor} className={className}>
      {htmlFor}
    </label>
  );
}

export default Label;
