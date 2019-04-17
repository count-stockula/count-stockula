import React from "react"
import "./List.css";

export default function List(props){
     let styleName = window.location.toString().indexOf("sales") !== -1 ? "":"invList";
     return (
          <ul className={styleName}>
               {props.children}
          </ul>
     );
}