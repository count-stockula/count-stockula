import React from "react";
import "./Label.css";

function Label(props) {
  const { htmlFor, className, labValue } = props;
  return <label htmlFor={htmlFor} className={className}>{labValue}</label>;
}

export default Label;
