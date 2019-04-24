import React from "react";
import "./ListItem.css";

export default function ListItem(props) {
  let styledLine =
    props.curQty <= 0
      ? "red lighten-4 listItem"
      : props.curQty > props.criticalQty
      ? "border listItem"
      : props.curQty === undefined
      ? "border listItem"
      : "yellow lighten-5 listItem";
  return <li className={styledLine}>{props.children}</li>;
}
