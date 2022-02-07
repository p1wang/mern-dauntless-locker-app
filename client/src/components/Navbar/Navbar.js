import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@material-ui/core";

export default function Navbar() {
  return (
    <Box style={{ marginBottom: "120px" }} mb={6}>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#2f93d6",
          padding: "15px",
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            Dauntless Locker
          </Typography>
          <Typography style={{ padding: "10px" }}>bltz</Typography>
          <Avatar
            alt="pfp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2CfEmdL53GXnQv3ApXBqBbWn6y5pXoiCeYQ&usqp=CAU"
            style={{ margin: "10px" }}
          />
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
