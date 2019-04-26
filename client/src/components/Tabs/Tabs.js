import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import "./Tabs.css";

function TabContainer(props) {
  return (
    <Typography component="div" >
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  tabAppBar:{
       width:"inherit",
       top:"inherit",
       left:"inherit",
       right:"inherit"
  }
});

function TabControl (props) {
    const { classes } = props;
    return (         
        <AppBar className={classes.tabAppBar}>
          <Tabs variant="fullWidth" value={props.value} onChange={props.tabClick} indicatorColor="#d32f2f">
            <Tab value="one" className={props.value === "one" ? "tab selected" : "tab"} label="All Products"></Tab>
            <Tab value="two" className={props.value === "two" ? "tab selected" : "tab"}  label="Low Inventory" />
            <Tab value="three" className={props.value === "three" ? "tab selected" : "tab"}  label="Out of Stock" />    
          </Tabs>          
        </AppBar>  
    );
  
}

TabControl.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabControl);