import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false, // Initial boolean value
};

const booleanSlice = createSlice({
  name: 'booleanValue',
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value; // Toggle the boolean value
    },
    setTrue: (state) => {
      state.value = true; // Set the boolean value to true
    },
    setFalse: (state) => {
      state.value = false; // Set the boolean value to false
    },
  },
});

export const { toggle, setTrue, setFalse } = booleanSlice.actions;

export default booleanSlice.reducer;
