import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  authContainer: {
    paddingTop: "200px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "120px",
    },
  },
}));
