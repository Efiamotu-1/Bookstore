import React from 'react';

const BookForm = () => (
  <>
    <h3 style={{ marginTop: '1.5rem' }}>ADD A NEW BOOK</h3>
    <form style={{ display: 'flex', gap: '1.5rem' }}>
      <input type="text" placeholder="Title" name="title" />
      <input type="text" placeholder="Author" name="author" />
      <button type="submit">Add Book</button>
    </form>
  </>
);

export default BookForm;
