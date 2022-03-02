import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  appBar: {
    display: "flex",
    padding: "10px 50px",
    position: "fixed",
    width: "100%",
  },
  heading: {
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  profile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
  },
}));
