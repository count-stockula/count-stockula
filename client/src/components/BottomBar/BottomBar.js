import React from "react";
import "./BottomBar.css";

export default function(){
     return (
          <div className="grey lighten-3 py-2 bottomBar col ">
               <div className="mx-auto col-12 col-lg-5 col-md-6 col-xl-4 col-sm-8 text-left px-5 d-flex justify-content-between">
                    <i className="material-icons small text-white">dashboard</i>
                    <button className="btn waves-effect waves-light" >Scan</button>
                    <i className="material-icons small text-white">settings</i>
               </div>
          </div>
     );
}