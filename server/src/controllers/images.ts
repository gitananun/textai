import express from "express";

import { logFailedRequest } from "../../helpers/request";
import { ImageType, createImage } from "../db/images";
import { requestTextToImage } from "../external/runpod";

export const create = async (req: express.Request<{}, {}, ImageType>, res: express.Response) => {
  try {
    const { prompt, width, height } = req.body;
    const numOutputs = req.body.numOutputs || 1;

    requestTextToImage({ prompt, width, height, numOutputs }).then(async (image) => {
      if (!image || !image.src) return res.status(500).json({ message: "Image Generation Failed! Please try again." });

      const generatedImage = await createImage({ prompt, width, height, numOutputs, src: image.src });
      return res.status(201).json({ generatedImage }).end();
    });
  } catch (error) {
    logFailedRequest(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
