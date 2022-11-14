import { createSlice } from "@reduxjs/toolkit";
import { IntroductionFields } from "../helpers/interface";


const initialState = {
  core: [],
  frontend: [],
  backend: [],
  software: [], 
  other: [], 
  
}



const Skill = createSlice({
  name: 'skill',
  initialState,
  reducers: {

  }
})