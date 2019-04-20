import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import "./ContainedButtons.css";
import {Link}from "react-router-dom";

const styles = theme => ({
  button: {
    margin: 20,
    color: 'white',
    height: 48,
    padding: '0 30px',
    size: '50pt',
  }
});

function ContainedButtons(props) {
  const { classes } = props;
  return (
    <div className="buttonWrapper">
      <Grid
      container
      direction="column"
      justify="center"
      alignItems="center">
      
      <Link to="/sales"><Button variant="contained" className={classes.button}>
        SALES
      </Button></Link>
      <Link to="/inventory"><Button variant="contained" color="primary" className={classes.button}>
        INVENTORY
      </Button></Link>
      <Link to="/additem"><Button variant="contained" color="secondary" className={classes.button}>
        ADD NEW ITEM
      </Button></Link>
      
      
      </Grid>
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);