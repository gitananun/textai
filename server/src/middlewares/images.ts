import { ImageType } from "db/images";
import express from "express";

export const isRequestValid = async (
  req: express.Request<{}, {}, ImageType>,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { prompt, width, height, numOutputs } = req.body;

    if (!prompt || !width || !height || !numOutputs) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
