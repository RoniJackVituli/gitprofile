import { createSlice } from "@reduxjs/toolkit";

type BadgesStats = {
  indexsBadges: number[];
  indexGraph: number | null;
  indexGitStats: number | null;
  indexLanguageStats: number | null;
};

const initialState: BadgesStats = {
  indexsBadges: [],
  indexGraph: null,
  indexGitStats: null,
  indexLanguageStats: null,
};

const BadgesStatsSlice = createSlice({
  name: "badgeStats",
  initialState,
  reducers: {
    addIndexGraph(state, action) {
      if (state.indexGraph === action.payload.index) {
        state.indexGraph = null;
      } else {
        state.indexGraph = action.payload.index;
      }
    },
    addIndexGitStats(state, action) {
      if (state.indexGitStats === action.payload.index) {
        state.indexGitStats = null;
      } else {
        state.indexGitStats = action.payload.index;
      }
    },
    addIndexPopularLanguages(state, action) {
      if (state.indexLanguageStats === action.payload.index) {
        state.indexLanguageStats = null;
      } else {
        state.indexLanguageStats = action.payload.index;
      }
    },
    addIndexBadges(state, action) {
      const element = action.payload.index;
      if (state.indexsBadges.includes(element)) {
  
        return { ...state, indexsBadges: state.indexsBadges.filter((el) => el !== element) };
      }
      return { ...state, indexsBadges: [...state.indexsBadges, element] };
    },
    clearIndexBadges(state){
      return {...state, indexsBadges:[]}
    }
  },
});

export const BadgesStatsActions = BadgesStatsSlice.actions;
export default BadgesStatsSlice;
