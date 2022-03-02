import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  postsContainer: {
    justifyContent: "center",
    paddingTop: "50px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "0",
    },
  },
}));
