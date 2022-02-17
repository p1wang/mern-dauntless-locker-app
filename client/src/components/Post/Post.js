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
import { useSelector } from "react-redux";
import Link from "@material-ui/core/Link";

import useStyles from "./styles";
import { deletePost, likePost } from "../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  const Likes = () => {
    if (post.likes?.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{post.likes.length}
          {post.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  };

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
            image={post.imageURLs[0]}
            style={{ height: 140, width: 140 }}
          />
        </Grid>
        <Grid item>
          <CardMedia
            component="img"
            alt="weapon"
            style={{ height: 140, width: 140 }}
            image={post.imageURLs[1]}
          />
        </Grid>
        <Grid item>
          <CardMedia
            component="img"
            alt="weapon"
            style={{ height: 140, width: 140 }}
            image={post.imageURLs[2]}
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
          <Button
            size="small"
            style={{ marginRight: "auto" }}
            disabled={!user?.result}
            onClick={() => dispatch(likePost(post._id))}
          >
            <Likes />
          </Button>
          {(user?.result?.googleId === post?.creator ||
            user?.result?._id === post?.creator) && (
            <Button size="small" onClick={() => dispatch(deletePost(post._id))}>
              Delete
            </Button>
          )}
        </Container>
      </CardActions>
    </Card>
  );
};

export default Post;
