import axios from "axios";
import fs from "fs";
import path from "path";
import slugify from "slugify";
import { v1 as uuidv1 } from "uuid";

import { logFailure } from "../../helpers/handlers";
import { CraftType } from "./db";

type ResponseType = {
  id: string;
  delayTime: number;
  executionTime: number;
  output: { image: string }[];
  status: string;
};

export const requestCraftByPrompt = async (craft: Omit<CraftType, "createdAt">): Promise<CraftType | void> => {
  const { prompt, width, height, numOutputs } = craft;

  const requestBody = {
    input: {
      prompt: prompt,
      width: width,
      height: height,
      scheduler: "KLMS",
      prompt_strength: 1,
      guidance_scale: 7.5,
      num_outputs: numOutputs,
      num_inference_steps: 50,
    },
  };

  const headers = {
    accept: "application/json",
    authorization: process.env.RUN_POD_API_KEY,
  };

  return axios
    .post(process.env.RUN_POD_API_URL, requestBody, { headers })
    .then((response: axios.AxiosResponse<ResponseType>) => {
      const { output } = response.data;
      if (!output) return;

      return { ...craft, images: output.map((i) => i.image) };
    })
    .catch((error) => logFailure(error));
};

export const storeCraftImagesLocally = async (craft: CraftType): Promise<string[]> => {
  const { prompt, width, height, numOutputs, images } = craft;

  try {
    const promptSlug = slugify(prompt, { lower: true, strict: true, remove: /[*+~.()'"!:@]/g });
    const directory = path.join(__dirname, "../../../", "public/images", promptSlug);

    if (!fs.existsSync(directory)) fs.mkdirSync(directory, { recursive: true });

    const imagePaths: string[] = [];
    for (const src of images) {
      try {
        const response = await axios.get(src, { responseType: "arraybuffer" });

        const buffer = Buffer.from(response.data, "base64");
        const filename = `${width}x${height}-${uuidv1()}.png`;

        const filepath = path.join(directory, filename);
        fs.writeFileSync(filepath, buffer);

        const staticPath = path.join("images", promptSlug, filename);

        imagePaths.push(staticPath);
      } catch (error) {
        logFailure(error);
      }
    }

    return imagePaths;
  } catch (error) {
    console.error("Error storing images locally:", error);
  }
};
