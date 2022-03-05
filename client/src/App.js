import React, { useState, createContext } from "react";
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";

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
  // const user = JSON.parse(localStorage.getItem("profile"));
  const [showLoadingCircle, setShowLoadingCircle] = useState(true);

  return (
    <AppContext.Provider value={{ showLoadingCircle, setShowLoadingCircle }}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          {/* <BrowserRouter> */}
          <Container maxWidth="xl" disableGutters>
            <Navbar />
            <Routes>
              <Route path="/" exact element={<Navigate to="posts" />} />
              <Route path="/posts" exact element={<Home />} />
              <Route path="/posts/search" exact element={<Home />} />
              <Route
                path="/auth"
                exact
                // element={!user ? <Auth /> : <Navigate to="/posts" />}
                element={<Auth />}
              />
              <Route path="*" exact element={<Home />} />
            </Routes>
          </Container>
          {/* </BrowserRouter> */}
        </HashRouter>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
