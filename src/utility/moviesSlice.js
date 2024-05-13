import { createSlice } from '@reduxjs/toolkit'

const initialState = { }

const moviesSlice = createSlice({
  name: 'movies',
  initialState:{
    addMovies:null,
    addTrailer:null

  },

  reducers: {
    addMovies(state,action){
      state.addMovies=action.payload;
    },
    addTrailer(state,action)
    {
      state.addTrailer=action.payload

    }
    
  },
})

export const { addMovies,addTrailer } = moviesSlice.actions
export default moviesSlice.reducer