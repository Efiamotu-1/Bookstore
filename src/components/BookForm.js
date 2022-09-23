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
        item_id: books.length * 10,
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
    <div className="m-1">
      <h3 className="text-xl text-gray-600 ml-3 font-light">ADD A NEW BOOK</h3>
      <form onSubmit={handleSubmit} className="d-flex flex-wrap space-evenly container-fluid">
        <input className="p-2 md:w-5/12 rounded outline-none m-2" type="text" placeholder="Title" name="title" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="p-2 rounded outline-none m-2" type="text" placeholder="Author" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <select className="p-2 rounded outline-none m-2" onChange={(e) => setCategory(e.target.value)}>
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
