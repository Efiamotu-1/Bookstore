import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { title, author, id } = props;
  const handleClick = () => {
    dispatch(removeBook(id));
  };
  return (
    <li>
      <h2>
        {title}
        {' '}
        by
        {' '}
        {author}
      </h2>
      <button type="button" onClick={handleClick}>Remove</button>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
