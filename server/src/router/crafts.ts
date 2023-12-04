import express from "express";

import { create, fetch } from "../controllers/crafts";
import { isRequestValid } from "../middlewares/crafts";

export default (router: express.Router): void => {
  router.post("/crafts", isRequestValid, create);
  router.get("/crafts", fetch);
};
