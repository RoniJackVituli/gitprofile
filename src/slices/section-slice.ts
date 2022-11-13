import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  index: 0,
  sections: [],
  section: '',

}

const Section = createSlice({
  name:'section',
  initialState,
  reducers:{
    moveForward(state){
      if(state.index < state.sections.length){
        state.index = state.index + 1;
      }
    },
    moveBackward(state){
      if(state.index > 0){
        state.index = state.index - 1;
      }
    },
    updateArray(state,actions){
      const sections = actions.payload.arr;
      if(sections.length > 1){
        state.sections = sections;
        state.section = sections[0];
      }
    }
  }
})

export const SectionActions = Section.actions;
export default Section;
