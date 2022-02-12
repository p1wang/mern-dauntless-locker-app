import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

import useStyles from "./styles";

const Searchbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.searchBarContainer}>
      <InputBase
        style={{ width: "50ch" }}
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
      <SearchIcon style={{ display: "block", margin: "auto" }} />
    </div>
  );
};

export default Searchbar;
