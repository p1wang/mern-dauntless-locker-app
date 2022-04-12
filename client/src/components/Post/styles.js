import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  card: {
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "450px",
    width: "480px",
    [theme.breakpoints.down("sm")]: {
      width: "350px",
      height: "650px",
    },
  },
}));
