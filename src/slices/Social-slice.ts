import { createSlice } from "@reduxjs/toolkit";
import { SocialData } from "../helpers/interface";

type init = {
  github: SocialData,
  facebook: SocialData,
  instagram: SocialData,
  linkedin: SocialData,
  youtube: SocialData,
  twitter: SocialData,
  twitch: SocialData,
  stackoverflow: SocialData,
};

const initialState: init = {
   github: {
      label: "github profile",
      name: "github",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/main/src/helpers/icons/socials/",
      link: "https://www.github.com/",
      userName: "",
    },
    facebook: {
      label: "facebook profile",
      name: "facebook",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/main/src/helpers/icons/socials/",
      link: "https://www.facebook.com/",
      userName: "",
    },
    instagram: {
      label: "instagram profile",
      name: "instagram",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/main/src/helpers/icons/socials/",
      link: "https://www.instagram.com/",
      userName: "",
    },
    linkedin: {
      label: "linkedin profile",
      name: "linkedin",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/main/src/helpers/icons/socials/",
      link: "https://www.linkedin.com/in/",
      userName: "",
    },
    youtube: {
      label: "youtube channel",
      name: "youtube",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/main/src/helpers/icons/socials/",
      link: "https://www.youtube.com/c/",
      userName: "",
    },
    twitch: {
      label: "twitch channel",
      name: "twitch",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/main/src/helpers/icons/socials/",
      link: "https://www.twitch.tv/",
      userName: "",
    },
    twitter: {
      label: "twitter profile",
      name: "twitter",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/socials/",
      link: "https://www.twitter.com/",
      userName: "",
    },
    stackoverflow:{
      label: "stackoverflow profile:",
      name: "stackoverflow",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/main/src/helpers/icons/socials/",
      link: "https://www.stackoverflow.com/users/",
      userName: "",
    },
};

const Social = createSlice({
  name: "social",
  initialState,
  reducers: {
    update(state, actions) {
      const value = actions.payload.value;
      const name = actions.payload.name;      
      (state as any)[name].userName = value;
    },
  },
});

export const SocialActions = Social.actions;
export default Social;
