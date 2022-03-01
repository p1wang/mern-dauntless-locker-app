import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { useNavigate } from "react-router-dom";
import { getPostsBySearch } from "../../actions/posts";

const Searchbar = ({ setShowForm }) => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchPosts = () => {
    setShowForm(false);
    if (searchTerm.trim()) {
      dispatch(getPostsBySearch({ searchTerm }));
      setSearchTerm("");
      navigate(`/posts/search?searchQuery=${searchTerm || "none"}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className={classes.searchBarContainer}>
      <InputBase
        sx={{ width: "50ch" }}
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            console.log("Enter key pressed");
            searchPosts();
          }
        }}
      />
      <SearchIcon
        onClick={searchPosts}
        sx={{ display: "block", margin: "auto" }}
      />
    </div>
  );
};

export default Searchbar;
