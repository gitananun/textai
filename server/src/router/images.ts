import express from "express";

import { create, fetch } from "../controllers/images";
import { isRequestValid } from "../middlewares/images";

export default (router: express.Router): void => {
  router.post("/images", isRequestValid, create);
  router.get("/images", fetch);
};
