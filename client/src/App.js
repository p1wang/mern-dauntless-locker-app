import React, { useState, createContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Container, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff5722",
    },
    secondary: {
      main: "#00b7ff ",
    },
  },
});

export const AppContext = createContext();

const App = () => {
  const [showLoadingCircle, setShowLoadingCircle] = useState(true);

  return (
    <AppContext.Provider value={{ showLoadingCircle, setShowLoadingCircle }}>
      <ThemeProvider theme={theme}>
        <Container maxWidth="false" disableGutters>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Navigate to="posts" />} />
            <Route path="/posts" exact element={<Home />} />
            <Route path="/posts/search" exact element={<Home />} />
            <Route path="/auth" exact element={<Auth />} />
            <Route path="*" exact element={<Home />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
