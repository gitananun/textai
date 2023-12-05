export interface ICraft {
  width: number;
  prompt: string;
  height: number;
  createdAt: Date;
  images?: string[];
  numOutputs: number;
}

export const craftAdapter = (asset: any): ICraft => {
  if (!asset) throw new Error("Craft: No data provided to adapter");

  const { width, prompt, height, createdAt, numOutputs, images } = asset;

  if (!width || !prompt || !height || !createdAt || !numOutputs || !images)
    throw new Error("Craft: Invalid or missing data provided to adapter");

  return {
    width: asset.width,
    prompt: asset.prompt,
    height: asset.height,
    images: asset.images,
    createdAt: asset.createdAt,
    numOutputs: asset.numOutputs,
  };
};
