import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchBooks, removeBooks } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    title, author, category, id,
  } = props;
  const handleClick = () => {
    dispatch(removeBooks(id));
    dispatch(fetchBooks());
  };
  const [count, setCount] = useState('');
  const [chapterCount, setChapterCount] = useState('');
  useEffect(() => {
    setCount(Math.round(Math.random() * 100));
    setChapterCount(Math.round(Math.random() * 30));
  }, []);
  return (
    <div className=" my-5 p-5 w-11/12 mx-auto border border-gray-20 grid sm:grid-cols-1 md:grid-cols-3">
      <div className="">
        <li className="0">
          <p className="text-gray-600 font-bold">{category}</p>
          <h2 className="text-2xl text-stone-900 font-bold">
            {title}
          </h2>
          <p className="text-blue-900">{author}</p>
          <div className="flex mt-3">
            <button className="px-3 border-r-2 text-blue-900 hover:text-blue-100" type="button">Comments</button>
            <button className="px-3 border-r-2 text-blue-900 hover:text-blue-100" type="button" onClick={handleClick}>Remove</button>
            <button type="button" className="px-3 text-blue-900 hover:text-blue-100">Edit</button>
          </div>
        </li>
      </div>

      <div className="flex mr-4 p-5 pp">
        <div className="progress" />

        <div className="flex-column">
          <p>
            {count}
            %
          </p>
          <p>Completed</p>
        </div>
      </div>

      <div className="flex flex-col md:items-center">
        <div className="">
          <p className="text-gray-500">CURRENT CHAPTER</p>
          <p>
            CHAPTER
            {' '}
            {chapterCount}
          </p>
          <button type="button" className="text-stone-200 bg-blue-600 p-2 rounded mt-4">UPDATE PROGRESS</button>
        </div>
      </div>

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
