import { Grid, Grow, Box, Link } from "@mui/material";
import React, { useState } from "react";
import Alert from "@mui/material/Alert";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import Searchbar from "../Searchbar/Searchbar";
import { Button } from "@mui/material";
import useStyles from "./styles";
import Paginate from "../Pagination/Pagination";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  const [showForm, setShowForm] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState([]);
  const classes = useStyles();

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
      <Searchbar setShowForm={setShowForm} />
      {showAlert && (
        <Alert
          severity={alertMessage[0]}
          sx={{ width: "50%", marginTop: "30px" }}
        >
          {alertMessage[1]}
        </Alert>
      )}

      <Box className={classes.selectionButtons}>
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
        <Grid item margin={3}>
          <Posts setCurrentId={setCurrentId} page={page} />
        </Grid>
      </Grow>
      {!searchQuery && <Paginate page={page} />}
    </Grid>
  );
};

export default Home;
