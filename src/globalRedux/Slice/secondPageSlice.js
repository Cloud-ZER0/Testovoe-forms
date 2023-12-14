import { createSlice } from "@reduxjs/toolkit";

const secondPageSlice = createSlice({
  name: "secondPageData",
  initialState: {
    advantageHelper: {
      counterArray: [1],
      counter: 1,
    },
    advantages: [],
    checkBoxGroup: [],
    radioGroup: null,
  },
  reducers: {
    addAdvantages(state, { payload }) {
      if (payload !== state.advantages) {
        state.advantages = payload;
      }
    },
    addToHelper(state, { payload }) {
      state.advantageHelper.counter = payload.counter;
      state.advantageHelper.counterArray.push(payload.counter);
    },
    removeFromHelper(state) {
      state.advantageHelper.counter -= 1;
      state.advantageHelper.counterArray.pop();
    },
    addCheckBoxGroup(state, { payload }) {
      if (payload !== state.checkBoxGroup) {
        state.checkBoxGroup = payload;
      }
    },
    addRadioGroup(state, { payload }) {
      console.log(payload);
      if (payload !== state.radioGroup) {
        state.radioGroup = payload;
      }
    },
  },
});

export const {
  addAdvantages,
  addCheckBoxGroup,
  addRadioGroup,
  addToHelper,
  removeFromHelper,
} = secondPageSlice.actions;
export default secondPageSlice.reducer;
