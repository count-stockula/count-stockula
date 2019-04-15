import React from 'react';

export default function ListItem(props){
     let styledLine = props.curQty === 0 ? "justify-content-between d-flex p-3 border red lighten-4 font-weight-bold" : (props.curQty > props.criticalQty ? "justify-content-between d-flex p-3 border" : "justify-content-between d-flex p-3 border yellow lighten-5");
     return(
          <li className={styledLine}>{props.children}</li>
     );
}