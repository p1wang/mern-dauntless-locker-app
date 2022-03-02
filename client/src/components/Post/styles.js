import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "450px",
    width: "480px",
    [theme.breakpoints.down("md")]: {
      width: "350px",
      height: "650px",
    },
  },
}));
