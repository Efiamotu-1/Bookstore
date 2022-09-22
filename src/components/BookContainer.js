import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BooksList from './BookList';
import BookForm from './BookForm';
import { fetchBooks } from '../redux/books/books';

const BookContainer = () => {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [books, dispatch]);

  return (
    <>
      <BooksList books={books} />
      <BookForm />
    </>
  );
};

export default BookContainer;
