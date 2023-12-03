import express from "express";

import { ImageType, createImage } from "../db/images";

export const create = async (req: express.Request<{}, {}, ImageType>, res: express.Response) => {
  try {
    const { prompt, width, height, numOutputs } = req.body;

    const image = await createImage({ prompt, width, height, numOutputs });

    return res.status(201).json({ image }).end();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
