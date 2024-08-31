import express from "express";
import {
  getChats,
  getChat,
  addChat,
  readChat,
} from "../controllers/chat.controller.js";

import { verifyToken } from "../middleware/verifyToken.middleware.js";
const router = express.Router();

router.get("/:id", verifyToken, getChat);
router.get("/", verifyToken, getChats);
router.post("/", verifyToken, addChat);
router.put("/read/:id", verifyToken, readChat); //default route

export default router;
