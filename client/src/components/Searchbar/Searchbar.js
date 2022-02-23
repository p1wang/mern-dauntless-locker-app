import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { useNavigate } from "react-router-dom";
import { getPostsBySearch } from "../../actions/posts";

const Searchbar = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchPosts = () => {
    if (searchTerm.trim()) {
      dispatch(getPostsBySearch({ searchTerm }));
      navigate(`/posts/search?searchQuery=${searchTerm || "none"}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className={classes.searchBarContainer}>
      <InputBase
        style={{ width: "50ch" }}
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <SearchIcon
        onClick={searchPosts}
        style={{ display: "block", margin: "auto" }}
      />
    </div>
  );
};

export default Searchbar;
