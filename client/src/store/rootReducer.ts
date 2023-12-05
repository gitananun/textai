import { combineReducers } from "redux";

import craftsReducer from "./crafts/reducer";

const rootReducer = combineReducers({
  crafts: craftsReducer,
});

export default rootReducer;
