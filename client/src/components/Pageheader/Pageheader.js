import React from "react";
import "./PageHeader.css";

export default function(props){
     return (
          
          <div className="grey lighten-3 pt-2 pageHeader">
               <img src="/images/cntStockLogo.png" alt="Count Stockula Logo"/>
               <h5>{props.title}</h5>
          </div>
         
     );
}