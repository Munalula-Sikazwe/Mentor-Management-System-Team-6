/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoaded: false,
};
const splashSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    // Use it when we need to remove the splash screen
    stopLoader: (state) => {
      state.isLoaded = true;
    },
  },
});

export const { stopLoader } = splashSlice.actions;

export default splashSlice.reducer;
