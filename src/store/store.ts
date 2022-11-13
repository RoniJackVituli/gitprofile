import { configureStore } from "@reduxjs/toolkit";

import Section from "../slices/section-slice";
import Introduction from "../slices/introduction-slice";
export type RootState = ReturnType<typeof store.getState>;
const store = configureStore({
  reducer: {
    section: Section.reducer,
    intro: Introduction.reducer,
  },
});

export default store;
