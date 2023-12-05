import { fetchCrafts } from "@/services/craft-services";
import store from "@store/store";
import { setCrafts } from "@store/crafts/reducer";

const { dispatch } = store;

export const dispatchFetchCraftsAction = () =>
  fetchCrafts().then(async (payload) => dispatch(setCrafts(payload)));
