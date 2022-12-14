import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = (props) => {
  const { books } = props;

  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          category={book.category}
          author={book.author}
          id={book.id}
        />
      ))}
    </ul>
  );
};
BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      author: PropTypes.string,
      category: PropTypes.string,
    }),
  ).isRequired,
};

export default BookList;
