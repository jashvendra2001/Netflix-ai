import { createSlice } from "@reduxjs/toolkit";

const GptSlice=createSlice({
    name:"GPT",
    initialState:{
        GptButton:false
    },
    reducers:{
        ToggleGptContainer:(state)=>{
            state.GptButton=!state.GptButton;
        }
    }
})

export const { ToggleGptContainer } = GptSlice.actions;
export default GptSlice.reducer;