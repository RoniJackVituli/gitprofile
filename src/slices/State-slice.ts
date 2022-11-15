import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  name: 'preview',
  copy: '',
}


const STATE = createSlice({
  name: 'state',
  initialState,
  reducers:{
    changeState(state,actions){
      const name :string = actions.payload.name;
      switch(name.toUpperCase()){
        case 'PREVIEW':
          state.name = 'preview';
          break;
        case 'MARKDOWN':
          state.name = 'markdown';
          break;  
      }
    },
    triggerCpy(state,actions){
      const action = actions.payload.copy;
      return {...state, copy:action}
    }
  }
})


export const StateActions = STATE.actions;
export default STATE;