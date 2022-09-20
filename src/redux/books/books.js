import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  // action creators using redux toolkit
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      state.filter((book) => book.id !== action.payload);
    },
  },
});

export default booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
