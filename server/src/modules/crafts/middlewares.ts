import express from "express";

import { handleControllerFailure } from "../../helpers/handlers";
import { CraftType } from "./db";

export const isRequestValid = async (
  req: express.Request<{}, {}, CraftType>,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { prompt, width, height } = req.body;

    if (!prompt || !width || !height) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    next();
  } catch (error) {
    handleControllerFailure(error, res);
  }
};
