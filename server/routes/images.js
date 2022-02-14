import express from "express";

import { getImage } from "../controllers/images.js";

const router = express.Router();

router.get("/", getImage);

export default router;
