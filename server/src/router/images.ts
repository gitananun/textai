import express from "express";

import { create } from "../controllers/images";

export default (router: express.Router): void => {
  router.post("/images", create);
};
