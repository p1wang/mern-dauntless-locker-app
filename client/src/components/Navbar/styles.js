import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  appBar: {
    display: "flex",
    padding: "10px 50px",
    marginBottom: "50px",
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
    width: "30%",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
}));
