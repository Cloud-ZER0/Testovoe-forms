import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalState",
  initialState: {
    active: false,
  },
  reducers: {
    ChangeModalState(state) {
      state.active = !state.active;
    },
  },
});

export const { ChangeModalState } = modalSlice.actions;
export default modalSlice.reducer;
