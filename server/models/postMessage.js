import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  url: String,
  tags: [String],
  likes: { type: [String], default: [] },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  imageURLs: [String],
  perks: [String],
});

var PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
