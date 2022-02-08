import { Button, Paper, TextField, Typography, Box } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import { createPost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    url: "",
  });

  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: "", message: "", tags: "", url: "" });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
    // clear();
  };

  return (
    <Paper elevation={6} className={classes.paper}>
      <Box style={{ padding: "20px" }}>
        <form
          className={classes.form}
          autoComplete="off"
          noValidate
          onSubmit={handleOnSubmit}
        >
          <Typography variant="h6" align="center">
            New builds
          </Typography>
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            inputProps={{ maxLength: "50" }}
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <TextField
            name="message"
            variant="outlined"
            label="Message"
            fullWidth
            multiline
            rows={4}
            inputProps={{ maxLength: "200" }}
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
          <TextField
            name="tags"
            variant="outlined"
            label="Tags (coma separated)"
            fullWidth
            inputProps={{ maxLength: "100" }}
            value={postData.tags}
            onChange={(e) =>
              setPostData({ ...postData, tags: e.target.value.split(",") })
            }
          />
          <TextField
            name="url"
            variant="outlined"
            label="URL to the build"
            fullWidth
            inputProps={{ maxLength: "100" }}
            value={postData.url}
            onChange={(e) => setPostData({ ...postData, url: e.target.value })}
          />

          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Box>
    </Paper>
  );
};

export default Form;
