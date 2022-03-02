import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  authContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "350px",
    padding: "20px",
    margin: "150px auto 0px",
    [theme.breakpoints.down("sm")]: {
      margin: "150px auto 0px",
    },
  },
}));
