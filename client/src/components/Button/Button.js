import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./Button.css";

const styles = theme => ({
<<<<<<< HEAD
  // button: {
  //   margin: theme.spacing.unit,
  // },
  // input: {
  //   display: 'none',
  // },
=======
  //   button: {
  //     margin: theme.spacing.unit,
  //   },
  //   input: {
  //     display: 'none',
  //   },
>>>>>>> 52f62ea40f21c6fef3029c3f414abbe98e5b9771
});

function ContainedButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" className={classes.button}>
        Default
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        Secondary
      </Button>
      <Button
        variant="contained"
        color="secondary"
        disabled
        className={classes.button}
      >
        Disabled
      </Button>
      <Button
        variant="contained"
        href="#contained-buttons"
        className={classes.button}
      >
        Link
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={classes.button}>
          Upload
        </Button>
      </label>
    </div>
  );
}

ContainedButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Button);
