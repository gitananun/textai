import mongoose from "mongoose";

export type CraftType = {
  width: number;
  prompt: string;
  height: number;
  createdAt: Date;
  images?: string[];
  numOutputs: number;
};

const CraftSchema = new mongoose.Schema<CraftType>({
  images: [{ type: String }],
  prompt: { type: String, required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  numOutputs: { type: Number, default: 1, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const CraftModel = mongoose.model("Craft", CraftSchema);

export const getCrafts = () => {
  return CraftModel.find();
};

export const getCraftsBySearch = (search: string) => {
  return CraftModel.find({ prompt: { $regex: search, $options: "i" } });
};

export const createCraft = async (craft: Omit<CraftType, "createdAt">) => {
  return new CraftModel(craft).save().then((c) => c.toObject());
};
