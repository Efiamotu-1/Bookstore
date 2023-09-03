/* eslint-disable */

import React from "react";
import { useSelector } from "react-redux";
import BooksList from "./BookList";
import BookForm from "./BookForm";

const BookContainer = () => {

  return (
    <>
      <BooksList />
      <BookForm />
    </>
  );
};

export default BookContainer;
