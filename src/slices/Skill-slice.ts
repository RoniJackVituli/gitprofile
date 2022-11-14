import { createSlice } from "@reduxjs/toolkit";
import { IconData } from "../helpers/interface";

const initialState: IconData = {
  core: [
    {
      name: "c",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/programming/",
      toolTip: "C",
      link: "https://docs.microsoft.com/en-us/cpp/?view=msvc-170",
      clicked: false,
    },
    {
      name: "cplusplus",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/programming/",
      toolTip: "C++",
      link: "https://docs.microsoft.com/en-us/cpp/?view=msvc-170",
      clicked: false,
    },
    {
      name: "csharp",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/programming/",
      toolTip: "C#",
      link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
      clicked: false,
    },
    {
      name: "java",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/programming/",
      toolTip: "Java",
      link: "https://www.oracle.com/java/",
      clicked: false,
    },
    {
      name: "go",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/programming/",
      toolTip: "Go",
      link: "https://go.dev/doc/",
      clicked: false,
    },
    {
      name: "javascript",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/programming/",
      toolTip: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      clicked: false,
    },
    {
      name: "typescript",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/programming/",
      toolTip: "TypeScript",
      link: "https://www.typescriptlang.org/docs/",
      clicked: false,
    },
    {
      name: "python",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/programming/",
      toolTip: "Python",
      link: "https://www.python.org/",
      clicked: false,
    },
    {
      name: "php",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/programming/",
      toolTip: "PHP",
      link: "https://www.php.net/",
      clicked: false,
    },
    {
      name: "swift",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/programming/",
      toolTip: "Swift",
      link: "https://developer.apple.com/swift/",
      clicked: false,
    },
  ],
  frontend: [],
  backend: [],
  other: [],
  web3: [],
  skills: [],
};

const Skill = createSlice({
  name: "skill",
  initialState,
  reducers: {
    addSkill(state, actions) {
      const key = actions.payload.key;
      const index = actions.payload.index;
      const skill = (state as any)[key][index];
      skill.clicked = true;
      state.skills = [...state.skills, skill];
    },

    removeSkill(state, actions) {
      const key = actions.payload.key;
      const index = actions.payload.index;
      const skill = (state as any)[key][index];
      skill.clicked = false;
      state.skills = state.skills.filter((s) => s.name !== skill.name);
    },
  },
});

export const SkillActions = Skill.actions;
export default Skill;
