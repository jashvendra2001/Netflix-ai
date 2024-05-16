import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../utility/userSlice'; // assuming counterSlice is defined in a separate file
import moviesSlice from './moviesSlice';
import GptSlice from './GptSlice';
import supportedLangSlice from './supportedLangSlice';

export const store = configureStore({
  reducer: {
    user:counterSlice,
    movies:moviesSlice,
    GPT:GptSlice,
    supported:supportedLangSlice
  }
});