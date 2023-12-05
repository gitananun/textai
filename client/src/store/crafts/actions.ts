import {
  ICreateCraftPayload,
  fetchCrafts,
  generateCraft,
} from "@/services/craft-services";
import store from "@store/store";
import { addCraft, setCrafts } from "@store/crafts/reducer";

const { dispatch } = store;

export const dispatchFetchCraftsAction = (search?: string) =>
  fetchCrafts(search).then(async (payload) => dispatch(setCrafts(payload)));

export const dispatchGenerateCraftAction = (payload: ICreateCraftPayload) =>
  generateCraft(payload).then(async (payload) => dispatch(addCraft(payload)));
