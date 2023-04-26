import { Router } from "express";
import controller from "../controllers/index.js";

const router = Router();

router.get("/", controller.user);

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: id });
});

export default router;
