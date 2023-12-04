import axios from "axios";

import { ImageType } from "../db/images";
import { logFailure } from "../helpers/request";

type ResponseType = {
  id: string;
  delayTime: number;
  executionTime: number;
  output: { image: string }[];
  status: string;
};

export const requestImageByPrompt = async (image: Omit<ImageType, "createdAt">): Promise<ImageType | void> => {
  const { prompt, width, height, numOutputs } = image;

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
      if (!output || !output[0] || !output[0].image) return;

      return { ...image, src: output[0].image };
    })
    .catch((error) => logFailure(error));
};
