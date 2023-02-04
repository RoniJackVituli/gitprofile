import { configureStore } from "@reduxjs/toolkit";
import Introduction from "../slices/introduction-slice";
import Skill from "../slices/Skill-slice";
import Social from "../slices/Social-slice";
import Badges from "../slices/Badges-slice";
import BadgesStatsSlice from "../slices/BadgesStats-slice";
import STATE from "../slices/State-slice";

// convert object to string and store in localStorage
function saveToLocalStorage(state: any) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const store = configureStore({
  reducer: {
    intro: Introduction.reducer,
    skills: Skill.reducer,
    social: Social.reducer,
    badgesStats: BadgesStatsSlice.reducer,
    state: STATE.reducer,
  },
  preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
