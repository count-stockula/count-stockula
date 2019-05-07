import React from "react";
import "./PageHeader.css";

export default function(props) {
  return (
    <div className="pageHeader lighten-1">
      <img src="/images/cntStockLogo.png" alt="Count Stockula Logo" />
      <h5 className={props.isRed === "true" ? "redBar" : ""}>{props.title}</h5>
    </div>
  );
}
