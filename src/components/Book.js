/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchBooks, removeBooks } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { title, author, category, id } = props;
  const handleClick = () => {
    dispatch(removeBooks(id));
    dispatch(fetchBooks());
  };
  return (
    <div className=" my-5 p-5 w-11/12 mx-auto border-4 border-gray-20 grid sm:grid-cols-1 md:grid-cols-3">
      <div className=''>
        <li className="0">
        <p className='text-gray-700 font-bold'>{category}</p>
        <h2 className="text-2xl text-white font-bold">
          {title}
        </h2>
        <p className="text-blue-900">{author}</p>
        <div className='flex space-x-5'>
        <button className='pr-3 border-r-2'>Comments</button>
        <button type="button" onClick={handleClick}>Remove</button>
        <button>Edit</button>
        </div>
      </li>
      </div>
      <div className=''>2</div>
      <div className=''>3</div>
      
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
