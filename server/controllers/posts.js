import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";
import puppeteer from "puppeteer";

// scrapes text about perks from the page, add to postSchema
export const getPerks = async (url) => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  try {
    await page.goto(url);

    const perks = await page.$$eval("div.perk-title", (perks) => {
      return perks.map((perk) => perk.textContent);
    });

    await browser.close();

    console.log(perks);
    return perks;
  } catch (error) {
    await browser.close();
    const perks = [];
    return perks;
  }
};

// converts url of the build into an array of multiple image urls
export const getImageURLs = async (url) => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  try {
    await page.goto(url);

    const imageURLs = await page.$$eval("img", (anchors) =>
      [].map.call(anchors, (img) => img.src)
    );

    const images = [imageURLs[3], imageURLs[1], imageURLs[9]];
    await browser.close();
    return images;
  } catch (error) {
    console.log(error);
    await browser.close();
    const images = [
      "https://static.wikia.nocookie.net/dauntless_gamepedia_en/images/9/9a/All_weapons2.png",
      "https://static.wikia.nocookie.net/dauntless_gamepedia_en/images/9/9a/All_weapons2.png",
      "https://static.wikia.nocookie.net/dauntless_gamepedia_en/images/9/9a/All_weapons2.png",
    ];
    return images;
  }
};

// get post
export const getPosts = async (req, res) => {
  const { page } = req.query;
  try {
    const LIMIT = 8;
    const startIndex = (Number(page) - 1) * LIMIT;
    const total = await PostMessage.countDocuments({});
    // const postMessage = await PostMessage.find();

    const posts = await PostMessage.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    res.status(200).json({
      data: posts,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// create post
export const createPost = async (req, res) => {
  const post = req.body;

  try {
    const [urls, perks] = await Promise.all([
      getImageURLs(post.url),
      getPerks(post.url),
    ]);

    const newPostMessage = new PostMessage({
      ...post,
      imageURLs: urls,
      perks: perks,
      creator: req.userId,
      createdAt: new Date().toISOString(),
    });

    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

// searched posts
export const getPostsBySearch = async (req, res) => {
  const { searchQuery } = req.query;
  try {
    const posts = await PostMessage.find({
      $or: [
        { tags: new RegExp(searchQuery, "i") }, //convert document data into regular expression object
        { title: new RegExp(searchQuery, "i") },
      ],
    }).sort({ _id: -1 });

    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// delete post

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
};

// like post
export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) {
    return res.json({ message: "Unauthenticated" });
  }

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const post = await PostMessage.findById(id);

  const index = post.likes.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    post.likes.push(req.userId);
  } else {
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }
  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
    new: true,
  });

  res.status(200).json(updatedPost);
};
