import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import { useDispatch } from "react-redux";
import moment from "moment";

import useStyles from "./styles";

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
      <CardMedia
        component="img"
        alt="weapon"
        height="160"
        image="https://static.wikia.nocookie.net/dauntless_gamepedia_en/images/4/47/Emerald_Steel_Strikers_Icon.png"
      />
      <Typography variant="h5" align="center">
        {post.title}
      </Typography>
      <CardContent>
        <Typography gutterBottom variant="body2">
          {post.message}
        </Typography>
        <Typography variant="body2" className={classes.tags}>
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Post;
