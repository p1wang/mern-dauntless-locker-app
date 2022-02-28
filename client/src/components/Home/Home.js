import { Container, Grid, Grow } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Alert from "@mui/material/Alert";

import { getPosts } from "../../actions/posts";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import Searchbar from "../Searchbar/Searchbar";
import { Button } from "@mui/material";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth={false}>
      {showAlert && (
        <Alert
          severity={alertMessage[0]}
          sx={{ width: "50%", margin: "0 auto 30px" }}
        >
          {alertMessage[1]}
        </Alert>
      )}
      <Grid
        container
        spacing={3}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid item>
          <Searchbar setShowForm={setShowForm} />
        </Grid>
        <Button variant="contained" onClick={() => setShowForm(true)}>
          Create
        </Button>
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
          <Grid item xs={12}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
        </Grow>
      </Grid>
    </Container>
  );
};

export default Home;
