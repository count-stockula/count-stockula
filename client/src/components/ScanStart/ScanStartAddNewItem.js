import React from "react";
import "./ScanStart.css";
import Grid from '@material-ui/core/Grid';

export default function (props) {
  
  return (
    <div className="scanContainer">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        item xs={12}>

        <h1 className={props.isFormShown ? "scanText hide": "scanText"}>START SCANNING 
          <br className="scanBreak"></br>
          TO ADD NEW ITEM
        </h1>
        <h1 className={props.isFormShown ? "scanText": "scanText hide"}>I am a component full of fileds</h1>
      </Grid>
      </div>

      );
}