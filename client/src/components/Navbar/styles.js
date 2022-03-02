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
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "30px",
    // [theme.breakpoints.down("md")]: {
    //   backgroundColor: "green",
    // },
  },
}));
