import React, { PureComponent } from "react"
import PageHeader from "../../components/Pageheader/Pageheader"
import BottomBar from "../../components/BottomBar/BottomBar"
import "./MatOnly.css";

export default class MatOnly extends PureComponent{
     state={

     }
     render() {
          return (
               <>
               <PageHeader title="Materilze only"/>                
               <div className="row mainWrapper stretched">                              
                    <form className="col red darken-3 centralContent">
                         <p>Col 2</p>
                         <input type="text"/>
                    </form>                         
               </div>
               <BottomBar/>
               </>
          );
     };
};
