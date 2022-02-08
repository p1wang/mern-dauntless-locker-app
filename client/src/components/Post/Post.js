import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Container,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import { useDispatch } from "react-redux";
import moment from "moment";
import useStyles from "./styles";
import { deletePost } from "../../actions/posts";
import Link from "@material-ui/core/Link";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card raised className={classes.card}>
      <CardContent>
        <Typography variant="body2" className={classes.moment}>
          {moment(post.createdAt).fromNow()}
        </Typography>
      </CardContent>
      <Grid container style={{ justifyContent: "center" }}>
        <Grid item>
          <CardMedia
            component="img"
            alt="weapon"
            height="140"
            image="https://static.wikia.nocookie.net/dauntless_gamepedia_en/images/9/95/Skarn%27s_Smashers_Icon.png"
          />
        </Grid>
        <Grid item>
          <CardMedia
            component="img"
            alt="weapon"
            height="140"
            image="https://static.wikia.nocookie.net/dauntless_gamepedia_en/images/0/0e/Icon_omnicell_darkness.png"
          />
        </Grid>
        <Grid item>
          <CardMedia
            component="img"
            alt="weapon"
            height="140"
            image="https://static.wikia.nocookie.net/dauntless_gamepedia_en/images/3/30/Pangar%27s_Shine_Icon_001.png"
          />
        </Grid>
      </Grid>

      <CardContent>
        <Typography gutterBottom variant="h6">
          {post.title}
        </Typography>
        <Typography gutterBottom variant="body2">
          {post.message}
        </Typography>
        <Typography variant="body2" className={classes.tags}>
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </CardContent>
      <CardActions>
        <Container style={{ display: "flex", justifyContent: "space-around" }}>
          <Button size="small" component={Link} href={post.url} target="_blank">
            Open
          </Button>
          <Button size="small" style={{ marginRight: "auto" }}>
            Like
          </Button>
          <Button size="small" onClick={() => dispatch(deletePost(post._id))}>
            Delete
          </Button>
        </Container>
      </CardActions>
    </Card>
  );
};

export default Post;
