/* eslint-disable */

// import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  isLoading: false,
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case "fetchBooks":
      return { ...state, books: action.payload, isLoading: false };
    case "isLoading":
      return { ...state, isLoading: true };
    case "addBook":
      return {
        ...state,
        books: [...state.books, action.payload],
        isLoading: false,
      };
    case "removeBook":
      return {
        ...state,
        books: state.books.filter((book) => book.item_id !== action.payload),
        isLoading: false,
      };
    default:
      return state;
  }
}

export const fetchBooks = () => {
  return async function (dispatch, getState) {
    dispatch(setLoading());
    const res = await fetch(
      "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/FsxGdetN9h984Lfjk0aE/books"
    );
    const data = await res.json();

    const allBooks = Object.keys(data).map((id) => ({
      item_id: Number(id),
      title: data[id][0].title,
      author: data[id][0].author,
      category: data[id][0].category,
    }));
    dispatch({ type: "fetchBooks", payload: allBooks });
  };
};

export const setLoading = () => {
  return { type: "isLoading" };
};

export const addAction = (book) => {
  return async function (dispatch, getState) {
    dispatch(setLoading());
    const res = await fetch(
      "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/FsxGdetN9h984Lfjk0aE/books",
      {
        method: "POST",
        body: JSON.stringify(book),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: "addBook", payload: book });
  };
};

export const deleteAction = (id) => {
  return async function (dispatch, getState) {
    dispatch(setLoading());
    const res = await fetch(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/FsxGdetN9h984Lfjk0aE/books/${id}`,
      {
        method: "DELETE",
      }
    );
    dispatch({ type: "removeBook", payload: id });
  };
};
