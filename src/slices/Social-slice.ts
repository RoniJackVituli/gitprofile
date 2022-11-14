import { createSlice } from "@reduxjs/toolkit";
import { SocialData } from "../helpers/interface";

type init = {
  socials: SocialData[];
};

const initialState: init = {
  socials: [
    {
      label: "github profile",
      name: "github",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/main/src/helpers/icons/socials/",
      link: "https://www.github.com/",
      userName: "",
    },
    {
      label: "facebook profile",
      name: "facebook",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/socials/",
      link: "https://www.facebook.com/",
      userName: "",
    },
    {
      label: "intagram profile",
      name: "intagram",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/socials/",
      link: "https://www.instagram.com/",
      userName: "",
    },
    {
      label: "linkedin profile",
      name: "linkedin",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/socials/",
      link: "https://www.linkedin.com/in/",
      userName: "",
    },
    {
      label: "youtube channel",
      name: "youtube",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/socials/",
      link: "https://www.youtube.com/c/",
      userName: "",
    },
    {
      label: "twitch channel",
      name: "twitch",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/socials/",
      link: "https://www.twitch.tv/",
      userName: "",
    },
    {
      label: "twitter profile",
      name: "twitter",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/socials/",
      link: "https://www.twitter.com/",
      userName: "",
    },
    {
      label: "stackoverflow profile:",
      name: "stackoverflow",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/socials/",
      link: "https://www.stackoverflow.com/users/",
      userName: "",
    },
  ],
};

const Social = createSlice({
  name: "social",
  initialState,
  reducers: {
    update(state, actions) {
      const index = actions.payload.index;
      const value = actions.payload.value;
      
      state.socials[index].userName = value;

    },
  },
});

export const SocialActions = Social.actions;
export default Social;
