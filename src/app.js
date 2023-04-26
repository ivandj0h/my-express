import "dotenv/config";
import express from "express";
import cors from "cors";

import routes from "./routes/index.js";

export default function app() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use("/user", routes.user);

  app.listen(process.env.BASE_PORT, () => {
    console.log(
      `Server Running on ${process.env.BASE_URL}:${process.env.BASE_PORT}`
    );
  });
}
