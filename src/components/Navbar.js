import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import './testing.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <nav className="flex justify-between py-2 bg-gray-00 items-center border-b border-b-gray-200">
      <div className="flex space-x-14 items-center mx-5">

        <h1 className="text-3xl font-bold text-blue-700">Bookstore CMS</h1>
        <ul className="flex space-x-14 text-2l font-thin">
          {links.map(({ id, path, text }) => (
            <li key={id}>
              <NavLink
                end
                to={path}
                className="hover:text-zinc-50 active:text-gray-400"
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div>

        <div className="bg-white p-4 rounded-full mx-5">
          <FaUserAlt className="text-blue-600" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
