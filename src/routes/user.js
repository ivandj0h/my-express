import { Router } from "express";
import controller from "../controllers/index.js";

const router = Router();

router.get("/", controller.user);

export default router;
