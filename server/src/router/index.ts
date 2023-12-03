import express from "express";

import imagesRouter from "./images";

const router = express.Router();

export default (): express.Router => {
  router.get("/", (_, res) => res.send("Welcome to TextAI!"));

  imagesRouter(router);

  return router;
};
