import { createSlice } from "@reduxjs/toolkit";
import { IntroductionFields } from "../helpers/interface";


const initialState: IntroductionFields = {
  fullName:'',
  subtitle:'',
  description:'',
  location:'',
  email:'',
  portfolio_name:'',
  portfolio_url:'',
  project_name:'',
  project_url:'',
  learning: '',
  collaborating: '',
  else: '',
}

const Introduction = createSlice({
  name: 'intro',
  initialState,
  reducers:{
    update(state, actions){
      const key = actions.payload.name;
      const val = actions.payload.value;
      return {...state, [key]:val}
    },

  }
})

export const IntroductionActions = Introduction.actions;
export default Introduction;