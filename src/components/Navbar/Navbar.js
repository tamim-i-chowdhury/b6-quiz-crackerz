import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-300">
      <div>
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-2xl">Quiz Master</a>
      </div>
      <div className="text-xl font-medium">
        <NavLink className="mx-2" to="/">
          Home
        </NavLink>
        <NavLink className="mx-2" to="/blog">
          Blog
        </NavLink>
        <NavLink className="mx-2" to="/statistics">
          Statistics
        </NavLink>

        <NavLink className="mx-2" to="/about">
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
