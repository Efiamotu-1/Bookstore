/* eslint-disable*/
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div className='p-5'>
      <button type="button" className='bg-blue-600 text-stone-100 p-2 rounded m-3' onClick={() => { dispatch(checkStatus()); }}>Check Status</button>
     <h1 className='text-bold text-xl border-b-2'>BOOKS CATEGORIES</h1> 
     {categories.map((category, i) => {
     return <div key={i} className="p-2">
       <p  key={i}>{category}</p>
      </div>
     
     })}
    </div>
  );
};

export default Categories;
