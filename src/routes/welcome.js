import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    status_code: 200,
    status_message: "success",
    data: [
      {
        message: "Welcome to the API",
      },
    ],
  });
});

export default router;
