import express from "express";

import { handleControllerFailure } from "../../helpers/handlers";
import { requestCraftByPrompt, storeCraftImagesLocally } from "./actions";
import { CraftType, createCraft, getCrafts, getCraftsBySearch } from "./db";

export const create = async (req: express.Request<{}, {}, CraftType>, res: express.Response) => {
  try {
    const { prompt, width, height } = req.body;
    const numOutputs = req.body.numOutputs || 1;

    const generatedCraft = await requestCraftByPrompt({ prompt, width, height, numOutputs });

    if (!generatedCraft || !generatedCraft.images.length)
      return res.status(500).json({ message: "Craft Generation Failed!" });

    const imagePaths = await storeCraftImagesLocally(generatedCraft);
    if (imagePaths && imagePaths.length > 0) generatedCraft.images = imagePaths;

    const savedCraft = await createCraft(generatedCraft);

    return res.status(201).json({ savedCraft }).end();
  } catch (error) {
    handleControllerFailure(error, res);
  }
};

export const fetch = async (req: express.Request, res: express.Response) => {
  try {
    const { search } = req.query;

    if (search) {
      const crafts = await getCraftsBySearch(search.toString());
      return res.status(200).json({ crafts }).end();
    }

    const crafts = await getCrafts();
    return res.status(200).json({ crafts }).end();
  } catch (error) {
    handleControllerFailure(error, res);
  }
};
