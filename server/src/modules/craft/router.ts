import express from "express";

import { create, fetch } from "./controller";
import { isRequestValid } from "./middleware";

export default (router: express.Router): void => {
  router.post("/crafts", isRequestValid, create);
  router.get("/crafts", fetch);
};
