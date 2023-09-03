/* eslint-disable */

import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: "/",
      text: "Books",
    },
    {
      id: 2,
      path: "/categories",
      text: "Catgories",
    },
  ];

  const activeClassName = "activeLink";
  return (
    <nav style={{ marginBottom: "3rem" }}>
      <h1 style={{ display: "inline-block", marginRight: "2rem" }}>BookCMS</h1>
      <ul style={{ display: "inline-block", marginRight: "2rem" }}>
        {links.map(({ id, path, text }) => (
          <li style={{ display: "inline-block", marginRight: "2rem" }} key={id}>
            <NavLink
              end
              to={path}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
