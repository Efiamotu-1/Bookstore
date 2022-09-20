import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const books = useSelector((state) => state.book);
  // console.log(books.length);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: books.length + 1,
      title: name,
      author,
    };
    setName('');
    setAuthor('');
    dispatch(addBook(book));
    // console.log(books.length);
  };

  return (
    <>
      <h3 style={{ marginTop: '1.5rem' }}>ADD A NEW BOOK</h3>
      <form style={{ display: 'flex', gap: '1.5rem' }} onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" name="title" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Author" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button type="submit">Add Book</button>
      </form>
    </>
  );
};

export default BookForm;
