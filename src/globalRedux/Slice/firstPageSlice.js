import { createSlice } from "@reduxjs/toolkit";

const firstPageSlice = createSlice({
  name: "firstPageData",
  initialState: {
    nickname: "",
    firstName: "",
    lastName: "",
    gender: "",
  },
  reducers: {
    addNickname(state, { payload }) {
      if (payload !== state.nickname) {
        state.nickname = payload;
      }
    },
    addFirstName(state, { payload }) {
      if (payload !== state.firstName) {
        state.firstName = payload;
      }
    },
    addLastName(state, { payload }) {
      if (payload !== state.lastName) {
        state.lastName = payload;
      }
    },
    addGender(state, { payload }) {
      if (payload !== state.gender) {
        state.gender = payload;
      }
    },
  },
});

export const { addNickname, addFirstName, addLastName, addGender } =
  firstPageSlice.actions;
export default firstPageSlice.reducer;
