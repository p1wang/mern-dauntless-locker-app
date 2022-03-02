import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  searchBarContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "2px 5px",
    margin: "150px auto 0px",
    width: "600px",
    [theme.breakpoints.down("sm")]: {
      margin: "100px auto 0px",
      width: "300px",
    },
  },
}));
