import { createSlice } from "@reduxjs/toolkit";

const thirdPageSlice = createSlice({
  name: "thirdPageData",
  initialState: {
    about: "",
  },
  reducers: {
    addAbout(state, { payload }) {
      if (payload !== state.about) {
        state.about = payload;
      }
    },
  },
});

export const { addAbout } = thirdPageSlice.actions;
export default thirdPageSlice.reducer;
