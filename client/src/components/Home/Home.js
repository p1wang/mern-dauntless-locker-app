import { Container, Grid, Grow, Box, Link } from "@mui/material";
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
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid item>
          <Searchbar setShowForm={setShowForm} />
        </Grid>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            mt: 3,
            minWidth: "400px",
          }}
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
          <Grid item xs={12}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
        </Grow>
      </Grid>
    </Container>
  );
};

export default Home;
