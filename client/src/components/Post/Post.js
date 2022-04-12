import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Link,
} from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { useDispatch } from "react-redux";
import moment from "moment";

import useStyles from "./styles";
import { deletePost, likePost } from "../../actions/posts";

const Post = ({ post, setCurrentId, page }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  const Likes = () => {
    if (post.likes?.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbUpOffAltIcon fontSize="small" />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpOutlinedIcon fontSize="small" />
          &nbsp;{post.likes.length}
          {post.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpOutlinedIcon fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  return (
    <Card raised className={classes.card}>
      <CardContent sx={{ paddingBottom: 0 }}>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </CardContent>

      <Grid
        container
        spacing={1}
        sx={{
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Grid item>
          <CardMedia
            component="img"
            alt="weapon"
            image={post.imageURLs[0]}
            sx={{ width: "140px", height: "140px" }}
          />
        </Grid>
        <Grid item>
          <CardMedia
            component="img"
            alt="weapon"
            sx={{ width: "140px", height: "140px" }}
            image={post.imageURLs[1]}
          />
        </Grid>
        <Grid
          item
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {post.perks.map((perk) => (
            <Typography
              sx={{
                textAlign: "center",
              }}
              variant="body2"
              key={perk}
            >
              {perk}
            </Typography>
          ))}
        </Grid>
      </Grid>

      <CardContent sx={{ paddingBottom: 0 }}>
        <Typography sx={{ paddingBottom: 1 }} variant="h5" color="primary">
          {post.title}
        </Typography>
        <Typography
          sx={{
            paddingBottom: 2,
            wordWrap: "break-word",
          }}
          variant="body2"
        >
          {post.message}
        </Typography>
        <Typography variant="body2" color="secondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </CardContent>
      <CardActions sx={{ paddingTop: 0 }}>
        <Button
          size="small"
          component={Link}
          href={post.url}
          target="_blank"
          color="secondary"
          variant="outlined"
        >
          Open
        </Button>
        <Button
          size="small"
          target="_blank"
          color="secondary"
          variant="outlined"
          sx={{ marginLeft: "8px" }}
          onClick={async () => {
            navigator.clipboard.writeText(post.url);
          }}
        >
          Copy
        </Button>
        <Button
          size="small"
          sx={{ marginRight: "auto", marginLeft: "8px" }}
          color="secondary"
          variant="outlined"
          disabled={!user?.result}
          onClick={() => dispatch(likePost(post._id))}
        >
          <Likes />
        </Button>
        {(user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator) && (
          <Button
            size="small"
            color="primary"
            variant="outlined"
            onClick={() => dispatch(deletePost(post._id, page))}
          >
            Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
