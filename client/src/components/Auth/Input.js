import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Input = ({
  name,
  handleChange,
  label,
  half,
  autoFocus,
  type,
  handleShowPassword,
}) => (
  <TextField
    margin="normal"
    name={name}
    onChange={handleChange}
    variant="outlined"
    required
    fullWidth
    label={label}
    autoFocus={autoFocus}
    type={type}
    InputProps={
      name === "password"
        ? {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword}>
                  {type === "password" ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }
        : null
    }
  />
);

export default Input;
