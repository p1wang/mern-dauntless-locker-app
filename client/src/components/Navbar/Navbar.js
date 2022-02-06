import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static" color="primary">
      <Typography align="center">Memories</Typography>
    </AppBar>
  );
};

export default Navbar;
