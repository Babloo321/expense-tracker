import { configureStore } from '@reduxjs/toolkit';
import booleanReducer from '../slices/booleanSlice.js';

const store = configureStore({
  reducer: {
    booleanValue: booleanReducer,
  },
});

export default store;
