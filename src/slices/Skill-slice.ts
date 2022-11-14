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
  frontend: [
    {
      name: "react",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/programming/",
      toolTip: "Reactjs",
      link: "https://reactjs.org/docs/getting-started.html",
      clicked: false,
    },
    {
      name: "nextjs",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/programming/",
      toolTip: "Nextjs",
      link: "https://nextjs.org/docs",
      clicked: false,
    },
    {
      name: "html5",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/programming/",
      toolTip: "HTML 5",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      clicked: false,
    },
    {
      name: "css3",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/programming/",
      toolTip: "CSS 3",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      clicked: false,
    },
    {
      name: "vuejs",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/programming/",
      toolTip: "Vuejs",
      link: "https://vuejs.org/guide/introduction.html",
      clicked: false,
    },
    {
      name: "sass",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/programming/",
      toolTip: "Sass",
      link: "https://sass-lang.com/documentation/",
      clicked: false,
    },
    {
      name: "angularjs",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/programming/",
      toolTip: "Angular",
      link: "https://angular.io/docs",
      clicked: false,
    },
  ],
  backend: [],
  software: [
    {
      name: "photoshop",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/programming/",
      toolTip: "Photoshop",
      link: "https://www.adobe.com",
      clicked: false,
    },
    {
      name: "premierepro",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/programming/",
      toolTip: "Premiere Pro",
      link: "https://www.adobe.com",
      clicked: false,
    },
    {
      name: "illustrator",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/programming/",
      toolTip: "illustrator",
      link: "https://www.adobe.com",
      clicked: false,
    },
    {
      name: "xd",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/programming/",
      toolTip: "xd",
      link: "https://www.adobe.com",
      clicked: false,
    },
    {
      name: "aftereffects",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/programming/",
      toolTip: "After Effects",
      link: "https://www.adobe.com",
      clicked: false,
    },
    {
      name: "figma",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/programming/",
      toolTip: "Figma",
      link: "https://www.Figma.com",
      clicked: false,
    },
    {
      name: "sketch",
      path: "https://raw.githubusercontent.com/RoniJackVituli/gitprofile/skill-section/src/helpers/icons/programming/",
      toolTip: "Sketch",
      link: "https://www.sketch.com",
      clicked: false,
    },
  ],
  other: [],
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
