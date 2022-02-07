import { Container, Grid, Grow } from "@material-ui/core";
import React from "react";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();

  return (
    <Container maxWidth={false}>
      <Grid
        container
        spacing={3}
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          alignItems: "center",
        }}
      >
        <Grid item xs={12}>
          <Posts />
        </Grid>
        <Grid item>
          <Form />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
