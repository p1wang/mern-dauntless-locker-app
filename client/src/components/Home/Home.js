import { Container, Grid, Grow } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getPosts } from "../../actions/posts";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

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
          <Posts setCurrentId={setCurrentId} />
        </Grid>
        <Grid item>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
