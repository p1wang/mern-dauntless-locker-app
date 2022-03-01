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
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import { useDispatch } from "react-redux";
import moment from "moment";

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
    <Card
      raised
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "500px",
        width: "550px",
      }}
    >
      <CardContent>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </CardContent>

      <Grid
        container
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

          {/* <Typography
            variant="body2"
            style={{ textAlign: "center", whiteSpace: "pre-line" }}
          >
            {post.perks.map((perk) => `${perk}\n`)}
          </Typography> */}
        </Grid>
      </Grid>

      <CardContent>
        <Typography sx={{ paddingBottom: 1 }} variant="h5" color="primary">
          {post.title}
        </Typography>
        <Typography
          sx={{
            paddingBottom: 2,
            // overflow: "hidden",
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
      <CardActions>
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
      </CardActions>
    </Card>
  );
};

export default Post;
