import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  selectionButtons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 3,
    gap: "30px",
    paddingTop: "20px",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "20px",
    },
  },
}));
