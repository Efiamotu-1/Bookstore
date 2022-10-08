import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewBook, fetchBooks } from '../redux/books/books';

const BookForm = () => {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const categories = useSelector((state) => state.categories);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== '' && author !== '') {
      const book = {
        item_id: books.length * 1000,
        title: name,
        author,
        category,
      };
      setName('');
      setAuthor('');
      dispatch(addNewBook(book));
      dispatch(fetchBooks());
    }
  };

  return (
    <div className="w-11/12 mx-auto bg-gray-500 p-5 my-3">
      <h3 className="text-xl text-gray-900 py-1 font-light">ADD A NEW BOOK</h3>
      <form onSubmit={handleSubmit} className="container-fluid space-x-5">
        <input className="p-2 md:w-5/12 rounded outline-none " type="text" placeholder="Title" name="title" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="p-2 rounded outline-none " type="text" placeholder="Author" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <select className="p-2 rounded outline-none " onChange={(e) => setCategory(e.target.value)}>
          {
            categories.map((cat) => (
              <option
                key={cat.toString()}
                value={cat}
              >
                {cat}
              </option>
            ))
          }
        </select>
        <button className="bg-blue-600 px-5 py-2 text-gray-100 rounded hover:bg-blue-900" type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
