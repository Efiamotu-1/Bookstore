import { createSlice } from '@reduxjs/toolkit';

const initialState = ['Fiction', 'Drama', 'Computer Science', 'Technology', 'Politics', 'Product Design'];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => state,
  },
});

export default categoriesSlice.reducer;
export const { checkStatus } = categoriesSlice.actions;
