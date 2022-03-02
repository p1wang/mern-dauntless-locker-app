import { Container, Grid, Grow, Box, Link, CssBaseline } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Alert from "@mui/material/Alert";

import { getPosts } from "../../actions/posts";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import Searchbar from "../Searchbar/Searchbar";
import { Button } from "@mui/material";
import useStyles from "./styles";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState([]);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {showAlert && (
        <Alert
          severity={alertMessage[0]}
          sx={{ width: "50%", margin: "0 auto 30px" }}
        >
          {alertMessage[1]}
        </Alert>
      )}

      <Searchbar setShowForm={setShowForm} />

      <Box
        className={classes.selectionButtons}
      >
        <Button
          variant="contained"
          color="success"
          onClick={() => setShowForm(true)}
        >
          Create Post
        </Button>
        <Button
          variant="contained"
          component={Link}
          href={
            "https://www.dauntless-builder.com/b/XafXTkTpTQT8TbTMT5TeTxTmTdTJTwT2T7T2T1TyT8TQTrTpT3"
          }
          target="_blank"
        >
          Make Build URLs
        </Button>
      </Box>

      {showForm && (
        <Grid item>
          <Form
            currentId={currentId}
            setCurrentId={setCurrentId}
            setShowForm={setShowForm}
            setShowAlert={setShowAlert}
            setAlertMessage={setAlertMessage}
          />
        </Grid>
      )}
      <Grow in timeout={800}>
        <Grid item>
          <Posts setCurrentId={setCurrentId} />
        </Grid>
      </Grow>
    </Grid>
  );
};

export default Home;
