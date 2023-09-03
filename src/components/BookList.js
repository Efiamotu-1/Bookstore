/* eslint-disable */

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/books/books";

const BookList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  const { books, isLoading } = useSelector((state) => state.books);

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <ul>
          {books.map((book) => (
            <Book
              key={book.item_id}
              title={book.title}
              author={book.author}
              id={book.item_id}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default BookList;
