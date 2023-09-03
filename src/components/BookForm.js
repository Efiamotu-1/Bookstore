/* eslint-disable */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAction } from "../redux/books/books";

const BookForm = () => {
  const { isLoading } = useSelector((store) => store.books);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      item_id: Math.round(Math.random() * 135),
      title: name,
      author,
      category: "",
    };
    setName("");
    setAuthor("");
    dispatch(addAction(book));
  };

  return (
    <>
      <h3 style={{ marginTop: "1.5rem" }}>ADD A NEW BOOK</h3>
      <form style={{ display: "flex", gap: "1.5rem" }} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          Add Book
        </button>
      </form>
    </>
  );
};

export default BookForm;
