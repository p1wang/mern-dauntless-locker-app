import React, { useState, useEffect } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Avatar,
  Button,
  Box,
  Container,
} from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import { LOGOUT } from "../../constants/actionTypes";
import useStyles from "./styles";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: LOGOUT });

    navigate("/auth");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="sticky" color="inherit">
      <Container maxWidth="xl">
        <Toolbar
          className={classes.toolbar}
          // sx={{
          //   justifyContent: { xs: "space-between" },
          // }}
        >
          <Box className={classes.brandContainer}>
            <Typography
              component={Link}
              to="/"
              className={classes.heading}
              color="secondary"
              variant="h2"
              // sx={{
              //   justifyContent: { xs: "space-between" },
              // }}
              align="center"
            >
              Dauntless Locker
            </Typography>
          </Box>
          {user?.result ? (
            <div className={classes.profile}>
              <Avatar
                alt={user?.result.name}
                src={user?.result.imageUrl}
                // sx={{ display: { xs: "none" } }}
              >
                {user?.result.name.charAt(0)}
              </Avatar>
              <Typography
                // sx={{ display: { xs: "none" } }}
                className={classes.userName}
                variant="h6"
              >
                {user?.result.name}
              </Typography>
              <Button variant="contained" color="primary" onClick={logout}>
                Logout
              </Button>
            </div>
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="secondary"
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
