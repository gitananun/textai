import express from "express";

import { storeImageLocally } from "../actions/images";
import { ImageType, createImage, getImages, getImagesBySearch } from "../db/images";
import { requestImageByPrompt } from "../external/runpod";
import { handleControllerFailure } from "../helpers/request";

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
    handleControllerFailure(error, res);
  }
};

export const fetch = async (req: express.Request, res: express.Response) => {
  try {
    const { search } = req.query;

    if (search) {
      const images = await getImagesBySearch(search.toString());
      return res.status(200).json({ images }).end();
    }

    const images = await getImages();
    return res.status(200).json({ images }).end();
  } catch (error) {
    handleControllerFailure(error, res);
  }
};
