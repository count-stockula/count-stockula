import React from "react";
import {Link}from "react-router-dom";
import "./Button.css";

export default function(){
     return (
          <div className="backToApp"> 
               <div className="center">
                    <Link to="/Scan"><button className="waves-circle waves-red btn" >Go To App</button></Link>
               </div>              
          </div>
     );
}