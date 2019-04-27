import React from "react";
import "./Label.css";

function Label(props) {
  // const { htmlFor, className } = props;
  // return (
  //   <label htmlFor={htmlFor} className={className}>
  //     {htmlFor}
  //   </label>
  // );
  const { htmlFor, className, labValue } = props;
  return <label htmlFor={htmlFor} className={className}>{labValue ==="" || !labValue ? htmlFor:labValue}</label>;
}

export default Label;
