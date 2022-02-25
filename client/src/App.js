import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));

  console.log(`the user in local storage is ${user}`);

  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Navigate to="posts" />} />
        <Route path="/posts" exact element={<Home />} />
        <Route
          path="/auth"
          exact
          // element={!user ? <Auth /> : <Navigate to="/posts" />}
          element={<Auth />}
        />
        <Route path="/posts/search" exact element={<Home />} />
        <Route path="*" exact element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
