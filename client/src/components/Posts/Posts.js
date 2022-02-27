import React from "react";
import { Grid, CircularProgress, Box } from "@mui/material";
import { useSelector } from "react-redux";

import Post from "../Post/Post";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  if (!posts.length) return "No posts";

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
