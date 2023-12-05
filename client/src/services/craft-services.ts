import { ICraft, craftAdapter } from "@/types/craft";
import { axiosInstance } from "@/utils/axios";

export interface ICreateCraftPayload {
  width: number;
  prompt: string;
  height: number;
  numOutputs: number;
}

export const fetchCrafts = async (): Promise<ICraft[]> => {
  return axiosInstance()
    .get("/crafts")
    .then((res): ICraft[] => {
      if (!res) throw new Error();

      return res.data.crafts.map((craft: any) => craftAdapter(craft));
    });
};

export const generateCraft = async (
  payload: ICreateCraftPayload,
): Promise<ICraft> => {
  return axiosInstance()
    .post(`/crafts`, payload)
    .then((res): ICraft => {
      if (!res) throw new Error();

      return craftAdapter(res.data.savedCraft);
    });
};
