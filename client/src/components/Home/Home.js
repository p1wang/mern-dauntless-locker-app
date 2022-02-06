import { Container, Grid } from "@material-ui/core";
import React from "react";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";

const Home = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} sm={7}>
        <Posts />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Form />
      </Grid>
    </Grid>
  );
};

export default Home;
