import React from "react";
import { Link } from 'react-router-dom'
export const NavCommon = () => {
  return (
    <>
      <nav className="hidden sm:block w-full">
        <ul className="flex justify-center gap-10 bg-gray-500 p-4 text-white">
          <li className="hover:underline cursor-pointer">
            <Link to="/">Login</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link to="/nav-bar">Navbar</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link to="/applications">Applications</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link to="/student-info-table">StudentInfoTable</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link to="/enrolled-courses">EnrolledCourses</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
