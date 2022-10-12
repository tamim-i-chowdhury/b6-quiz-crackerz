import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-gray-800 text-white">
      <div className="flex-1 lg:ml-4">
        <span className="btn btn-ghost normal-case text-2xl">Quiz Master</span>
      </div>
      <div className="hidden text-xl font-medium mr-8 lg:block">
        <NavLink
          className={({ isActive }) =>
            isActive ? "mx-4 text-blue-500" : "mx-4 text-white"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "mx-4 text-blue-500" : "mx-4 text-white"
          }
          to="/blog"
        >
          Blog
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "mx-4 text-blue-500" : "mx-4 text-white"
          }
          to="/statistics"
        >
          Statistics
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "mx-4 text-blue-500" : "mx-4 text-white"
          }
          to="/about"
        >
          About
        </NavLink>
      </div>
      <div className="flex-none gap-2 lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="flex-none">
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
          </label>
          <ul
            tabIndex={0}
            className="p-2 dropdown-content bg-gray-800 rounded-box w-40 text-center font-medium py-4"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "mx-4 text-blue-500" : "mx-4 text-white"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "mx-4 text-blue-500" : "mx-4 text-white"
                }
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "mx-4 text-blue-500" : "mx-4 text-white"
                }
                to="/statistics"
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "mx-4 text-blue-500" : "mx-4 text-white"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
