import React from "react";
import {Link}from "react-router-dom";
import "./PageHeader.css";

export default function(props) {
  return (
    <div className="pageHeader grey lighten-1">
      <Link to="/About"><img src="/images/cntStockLogo.png" alt="Count Stockula Logo" /></Link>
      <h5 className={props.isRed === "true" ? "redBar" : ""}>{props.title}</h5>
    </div>
  );
}
