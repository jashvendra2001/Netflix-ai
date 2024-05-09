import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../utility/userSlice'; // assuming counterSlice is defined in a separate file

export const store = configureStore({
  reducer: {
    user:counterSlice
  }
});