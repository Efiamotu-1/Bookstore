import React from 'react';
import { useSelector } from 'react-redux';
import BooksList from './BookList';
import BookForm from './BookForm';

const BookContainer = () => {
  const books = useSelector((state) => state.book);
  // const books = [
  //   {
  //     id: 1,
  //     title: 'The Hunger Games',
  //     author: 'Suzan Collins',
  //   },
  //   {
  //     id: 2,
  //     title: 'Harry Potter',
  //     author: 'J.K.Rowling',
  //   },
  //   {
  //     id: 3,
  //     title: 'The Lord of the Rings',
  //     author: 'J.R.R. Tolkien',
  //   },
  // ];

  return (
    <>
      <BooksList books={books} />
      <BookForm />
    </>
  );
};

export default BookContainer;
