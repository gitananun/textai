import express from "express";

import { create, fetch } from "./controllers";
import { isRequestValid } from "./middlewares";

export default (router: express.Router): void => {
  router.post("/crafts", isRequestValid, create);
  router.get("/crafts", fetch);
};
