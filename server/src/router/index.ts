import express from "express";

import imagesRouter from "./images";

const router = express.Router();

export default (): express.Router => {
  router.get("/ping", (_, res) => res.status(200).send("pong"));

  imagesRouter(router);

  return router;
};
