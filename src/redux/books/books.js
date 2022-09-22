import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/UULDvvE4EWqYt0Y5rD8Z/books',
// {
//   item_id: 2,
//   title: "Harry Potter",
//   author: "JK Rowling",
//   category: "Fiction"
// }
// )
//   .then((response) => console.log(response.status));

// axios.delete('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/UULDvvE4EWqYt0Y5rD8Z/books/')
// .then(response => console.log(response.data))

const initialState = [];

// Generates pending, fulfilled and rejected action types
export const fetchBooks = createAsyncThunk('books/fetchBooks', () => axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/UULDvvE4EWqYt0Y5rD8Z/books')
  .then((response) => {
    const books = response.data;
    const data = Object.keys(books).map((id) => ({
      id: Number(id),
      title: books[id][0].title,
      author: books[id][0].author,
      category: books[id][0].category,
    }));
    return data;
  }));

export const addNewBook = createAsyncThunk('books/addBooks', (book) => {
  axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/UULDvvE4EWqYt0Y5rD8Z/books', book)
    .then((response) => response.status);
});

export const removeBooks = createAsyncThunk('books/removeBooks', (id) => {
  axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/UULDvvE4EWqYt0Y5rD8Z/books/${id}`)
    .then((response) => response.data);
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => action.payload);
  },
});

export default booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
