import { configureStore } from "@reduxjs/toolkit";

import Introduction from "../slices/introduction-slice";
import Skill from "../slices/Skill-slice";
import Social from "../slices/Social-slice";
import Badges from "../slices/Badges-slice";



const store = configureStore({
  reducer: {
    intro: Introduction.reducer,
    skills: Skill.reducer,
    social: Social.reducer,
    badges: Badges.reducer,
  },
});



export type RootState = ReturnType<typeof store.getState>;
export default store;
