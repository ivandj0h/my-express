import express from "express";
import dotenv from "dotenv";

dotenv.config();

export default function app() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
  });

  app.listen(process.env.BASE_PORT, () => {
    console.log(
      `Server Running on ${process.env.BASE_URL}:${process.env.BASE_PORT}`
    );
  });
}
