import express from "express";

import { storeImageLocally } from "../actions/images";
import { ImageType, createImage } from "../db/images";
import { requestImageByPrompt } from "../external/runpod";
import { logFailure } from "../helpers/request";

export const create = async (req: express.Request<{}, {}, ImageType>, res: express.Response) => {
  try {
    const { prompt, width, height } = req.body;
    const numOutputs = req.body.numOutputs || 1;

    const generatedImage = await requestImageByPrompt({ prompt, width, height, numOutputs });
    if (!generatedImage || !generatedImage.src) return res.status(500).json({ message: "Image Generation Failed!" });

    const storedImage = await storeImageLocally(generatedImage);
    const savedImage = await createImage(storedImage);

    return res.status(201).json({ savedImage }).end();
  } catch (error) {
    logFailure(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
