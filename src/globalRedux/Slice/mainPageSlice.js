import { createSlice } from "@reduxjs/toolkit";

const mainPageSlice = createSlice({
  name: "mainPageData",
  initialState: {
    phoneNumber: "",
    email: "",
  },
  reducers: {
    addPhoneNumber(state, { payload }) {
      state.phoneNumber = payload;
    },
    addEmail(state, { payload }) {
      state.email = payload;
    },
  },
});

export const { addPhoneNumber, addEmail } = mainPageSlice.actions;
export default mainPageSlice.reducer;
