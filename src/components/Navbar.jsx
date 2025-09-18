import React from 'react';
import Button from './Button';
import { Link } from 'react-router';
const Navbar = () => {
  return (
    <div className="bg-black py-2">
      <div className="navbar w-full lg:w-10/12 container p-5 mx-auto shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn border-0 btn-primary bg-blue-500 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-4"
            >
              <Link to={'/beginner'}>Beginner Projects</Link>
              <Link to={'/intermediate'}>Intermediate Projects</Link>
              <Link to={'/advance'}>Advanced Projects</Link>
            </ul>
          </div>
          <a className="font-bold animate-pulse text-xl ml-3">
            Explore React with SM
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="space-x-6 menu-horizontal px-1">
            <Link
              to={'/beginner'}
              className="hover:border-blue-500 hover:border-b-2 cursor-pointer py-1 px-2 transition"
            >
              Beginner Projects
            </Link>
            <Link
              to={'/intermediate'}
              className="hover:border-blue-500 hover:border-b-2 cursor-pointer py-1 px-2 transition"
            >
              Intermediate Projects
            </Link>
            <Link
              to={'/advance'}
              className="hover:border-blue-500 hover:border-b-2 cursor-pointer py-1 px-2 transition"
            >
              Advanced Projects
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          <Button text={'Explore'} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
