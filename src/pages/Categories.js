import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div className='p-5'>
     <h1 className='text-bold text-xl border-b-2'>BOOKS CATEGORIES</h1> 

     {categories.slice(1).map((category, i) => {
     return <div key={i} className="p-2">
       <p  key={i}>{category}</p>
      </div>
     
     })}
    </div>
  );
};

export default Categories;
