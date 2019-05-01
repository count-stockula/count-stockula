import React from 'react';
import "./SieNav.css"

export default function SideNav(props){
  return(
    <div className="sidenav" id="sidenav">
    <i className="material-icons" onClick={props.closeWin}>close</i>
    <ul>
      {props.theItems.map(item => {
        return <li onClick={props.closeWin} key={item._id}  id={item.upc}>{item.name}</li>
        })}
    </ul>
    </div>
  );
}