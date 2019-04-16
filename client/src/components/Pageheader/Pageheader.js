import React from "react";
import "./PageHeader.css";

export default function(props){
     let dateFormat = () => {
          return "Sales: " + new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});;
     }
     return (          
          <div className="grey lighten-3 pt-2 pageHeader">
               <img src="/images/cntStockLogo.png" alt="Count Stockula Logo"/>
               <h5 className={props.isRed === "true" ? "redBar":""}>{dateFormat()}</h5>
          </div>
     );
}