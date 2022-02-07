import { Container, Grid, Grow } from "@material-ui/core";
import React from "react";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";

const Home = () => {
  return (
    <Container maxWidth={false}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={8}>
          <Posts />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Form />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
