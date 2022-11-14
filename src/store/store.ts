import { configureStore } from "@reduxjs/toolkit";

import Introduction from "../slices/introduction-slice";
export type RootState = ReturnType<typeof store.getState>;
const store = configureStore({
  reducer: {
    intro: Introduction.reducer,
  },
});

export default store;
