import express from "express";

import craftsRouter from "./crafts";

const router = express.Router();

export default (): express.Router => {
  router.get("/ping", (_, res) => res.status(200).send("pong"));

  craftsRouter(router);

  return router;
};
