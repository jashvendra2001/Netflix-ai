import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
  name: 'user',
  initialState:null,
  reducers: {
    userAdd: (state, action) => {
        return action.payload
      },
    remove: (state) => {
     return null;
    },
   
  },
})


export const { userAdd,remove} = counterSlice.actions

export default counterSlice.reducer