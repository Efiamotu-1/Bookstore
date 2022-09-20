import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <>
      <button type="button" onClick={() => { dispatch(checkStatus()); }}>Check Status</button>
      <p>{status}</p>
    </>
  );
};

export default Categories;
