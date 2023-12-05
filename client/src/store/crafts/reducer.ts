import { ICraft } from "@/types/craft";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/src/createAction";

interface IState {
  crafts: ICraft[];
}

const INITIAL_STATE: IState = {
  crafts: [],
};

export const craftsSlice = createSlice({
  name: "crafts",
  initialState: INITIAL_STATE,
  reducers: {
    setCrafts: (state, action: PayloadAction<ICraft[]>) => {
      state.crafts = action.payload;
    },
  },
});

export const { setCrafts } = craftsSlice.actions;

export default craftsSlice.reducer;
