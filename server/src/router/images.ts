import express from "express";

import { create } from "../controllers/images";
import { isRequestValid } from "../middlewares/images";

export default (router: express.Router): void => {
  router.post("/images", isRequestValid, create);
};
