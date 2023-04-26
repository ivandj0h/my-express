import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: id });
});

export default router;
