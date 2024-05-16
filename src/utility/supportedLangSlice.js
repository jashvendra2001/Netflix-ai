import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const supportedLangSlice = createSlice({
    name:"Supported",
    initialState:{
        lang:"English"
    },
    reducers:{
        SupportedLangUpdate:(state,action)=>{
            state.lang=action.payload;

        }
    }
})


export default supportedLangSlice.reducer;
export const{SupportedLangUpdate}=supportedLangSlice.actions;