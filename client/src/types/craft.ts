import moment from "moment";

export interface ICraft {
  id: string;
  width: number;
  prompt: string;
  height: number;
  createdAt: string;
  images?: string[];
  numOutputs: number;
}

export const craftAdapter = (asset: any): ICraft => {
  if (!asset) throw new Error("Craft: No data provided to adapter");

  const { _id, width, prompt, height, createdAt, numOutputs, images } = asset;

  if (
    !_id ||
    !width ||
    !prompt ||
    !height ||
    !createdAt ||
    !numOutputs ||
    !images
  )
    throw new Error("Craft: Invalid or missing data provided to adapter");

  const imagePaths = images.map(
    (image: string) => `${process.env.REACT_APP_API_BASE_URL}/${image}`,
  );

  return {
    id: _id,
    width: width,
    prompt: prompt,
    height: height,
    images: imagePaths,
    numOutputs: numOutputs,
    createdAt: moment(createdAt).format("MMMM Do YYYY, h:mm A"),
  };
};
