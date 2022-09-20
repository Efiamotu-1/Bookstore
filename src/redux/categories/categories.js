import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      state.push('Under Construction');
    },
  },
});

export default categoriesSlice.reducer;
export const { ordered } = categoriesSlice.actions;
