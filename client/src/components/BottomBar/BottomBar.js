import React from "react";
import {Link}from "react-router-dom";
import "./BottomBar.css";

export default function(){
     return (
          <div className="grey lighten-1 bottomBar"> 
               <div className="center">
                    <Link to="/Dashboard"><i className="material-icons small text-white">dashboard</i></Link>
                    <Link to="/Scan"><button className="waves-circle waves-red btn" >Scan</button></Link>
                    <Link to="/Settings"><i className="material-icons small text-white">settings</i></Link>
               </div>              
          </div>
     );
}