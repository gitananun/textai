import mongoose from "mongoose";

export type ImageType = {
  width: number;
  prompt: string;
  height: number;
  createdAt: Date;
  images?: string[];
  numOutputs: number;
};

const ImageSchema = new mongoose.Schema<ImageType>({
  images: [{ type: String }],
  prompt: { type: String, required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  numOutputs: { type: Number, default: 1, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const ImageModel = mongoose.model("Image", ImageSchema);

export const getImages = () => {
  return ImageModel.find();
};

export const getImageByPrompt = (prompt: string) => {
  return ImageModel.findOne({ prompt });
};

export const getImagesBySearch = (search: string) => {
  return ImageModel.find({ prompt: { $regex: search, $options: "i" } });
};

export const createImage = async (image: Omit<ImageType, "createdAt">) => {
  return new ImageModel(image).save().then((image) => image.toObject());
};
