import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ai: [
     {
      tag: "![Amazon Alexa]",
      url:
        "https://img.shields.io/badge/amazon%20alexa-52b5f7?style=for-the-badge&logo=amazon%20alexa&logoColor=white",
    },
     {
      tag: "![Dependabot]",
      url:
        "https://img.shields.io/badge/dependabot-025E8C?style=for-the-badge&logo=dependabot&logoColor=white",
    },
     {
      tag: "![Google Assistant]",
      url:
        "https://img.shields.io/badge/google%20assistant-4285F4?style=for-the-badge&logo=google%20assistant&logoColor=white",
    },
     
  ],
  browsers:[
    {
      tag:'![Brave]',
      url: 'https://img.shields.io/badge/Brave-FB542B?style=for-the-badge&logo=Brave&logoColor=white'
    },
    {
      tag:'![Edge]',
      url: 'https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=Microsoft-edge&logoColor=white'
    },
    {
      tag:'![Firefox]',
      url: 'https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white'
    },
    {
      tag:'![Google Chrome]',
      url: 'https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white'
    },
    {
      tag:'![Safari]',
      url: 'https://img.shields.io/badge/Safari-000000?style=for-the-badge&logo=Safari&logoColor=white'
    },
  ],

  badgesList: [],
};

const Badges = createSlice({
  name: "badges",
  initialState,
  reducers: {},
});

export const BadgesActions = Badges.actions;
export default Badges;
