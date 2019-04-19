import React from "react";
import "./ScanStart.css";
import Grid from '@material-ui/core/Grid';
import AddItemForm from "../../components/Forms/AddItemForm";

export default function (props) {
  
  return (
    <div className="scanContainer">

        <h1 className={props.isFormShown ? "scanText hide": "scanText"}>START SCANNING 
          <br className="scanBreak"></br>
          TO ADD NEW ITEM
        </h1>
        <AddItemForm className={props.isFormShown ? "scanText": "scanText hide"}></AddItemForm>
      </div>

      );
}