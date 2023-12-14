import { configureStore } from "@reduxjs/toolkit";
import mainPageReducer from "../Slice/mainPageSlice";
import firstPageReducer from "../Slice/firstPageSlice";
import secondPageReducer from "../Slice/secondPageSlice";
import thirdPageReducer from "../Slice/thirdPageSlice";
import modalSLiceReducer from "../Slice/modalSLice";

export const store = configureStore({
  reducer: {
    mainPageReducer,
    firstPageReducer,
    secondPageReducer,
    thirdPageReducer,
    modalSLiceReducer,
  },
});
