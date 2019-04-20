import React from "react";
import "./Label.css";

function Label(props) {
  const { htmlFor, className } = props;
  return <label htmlFor={htmlFor} className={className} />;
}

export default Label;
