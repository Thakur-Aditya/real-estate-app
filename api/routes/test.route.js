import express from "express";
import {demo, shouldBeAdmin,shouldBeLoggedIn} from "../controllers/test.controller.js";
import { verifyToken } from "../middleware/verifyToken.middleware.js";


const router = express.Router();

router.get("/should-be-logged-in",verifyToken, shouldBeLoggedIn);

router.get("/should-be-admin", shouldBeAdmin);

router.get("/demo",demo);

export default router;