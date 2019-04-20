import React from "react";
import "./ScanStart.css";
import Grid from '@material-ui/core/Grid';

export default function () {
  
  return (
    <div className="scanContainer">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        item xs={12}>

        <h1 className="scanText">START SCANNING 
          <br className="scanBreak"></br>
          TO ADD INVENTORY
        </h1>
      </Grid>
      </div>

      );
}