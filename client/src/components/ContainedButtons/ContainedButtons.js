import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./ContainedButtons.css";
import {Link}from "react-router-dom";



const styles = theme => ({
     button1: { 
          width:'170px',
          color: 'white',
          height: 48,
          size: '50pt',
          cursor:'pointer',  
          background: '#d32f2f',
     },
     button2: {
          width:'170px',
          color: 'white',
          height: 48,
          size: '50pt',
          cursor:'pointer',
          background: 'black',
     },
     button3: {
          width:'170px',
          color: 'white',
          height: 48,
          size: '50pt',
          cursor:'pointer',
          background: '#6a6a6a',
     }
});

function ContainedButtons(props) {
  const { classes } = props;
  return (
       <>
          <div className="buttonWrapper" >
               <Link to="/sales"><Button variant="contained" className={classes.button1}>
               SALES
               </Button></Link>
               <p>OR</p>
               <Link to="/inventory"><Button variant="contained" className={classes.button2}>
               INVENTORY
               </Button></Link>
               <p>OR</p>
               <Link to="/additem"><Button variant="contained" className={classes.button3}>
               ADD NEW ITEM
               </Button></Link>
          </div>
    </>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);