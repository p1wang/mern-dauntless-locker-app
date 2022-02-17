import express from "express";

import { getImage } from "../controllers/images.js";

const router = express.Router();

router.post("/", getImage);

export default router;
