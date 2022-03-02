import React from "react";
import { Grid, CircularProgress, Box } from "@mui/material";
import { useSelector } from "react-redux";

import Post from "../Post/Post";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      container
      sx={{ justifyContent: "center", paddingTop: "50px" }}
      spacing={4}
    >
      {posts.map((post) => (
        <Grid key={post._id} item>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
