import { configureStore } from "@reduxjs/toolkit";

import Introduction from "../slices/introduction-slice";
import Skill from "../slices/Skill-slice";
export type RootState = ReturnType<typeof store.getState>;
const store = configureStore({
  reducer: {
    intro: Introduction.reducer,
    skills: Skill.reducer,
  },
});

export default store;
