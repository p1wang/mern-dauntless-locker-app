import React from "react";
import { Grid, CircularProgress, Container, Box } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import Post from "../Post/Post";
import useStyles from "./styles";
import { getImageURLs } from "../../actions/images";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  const dispatch = useDispatch();

  dispatch(
    getImageURLs({
      url: "https://www.dauntless-builder.com/b/bMfLT0ZUoC2yT7LfYUWtxTmBCpeioCmMsZjcqC11UWCRCPjsYAtWCoLIBFKkUm",
    })
  );

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid container style={{ justifyContent: "center" }}>
      {posts.map((post) => (
        <Grid key={post._id} item>
          <Box style={{ padding: "20px" }}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
