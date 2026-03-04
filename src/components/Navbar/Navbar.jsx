import React from "react";
import plusImg from "../../assets/plus.png";

const Navbar = () => {
  const lists = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>FAQ</a>
      </li>
      <li>
        <a>Changelog</a>
      </li>
      <li>
        <a>Blog</a>
      </li>
      <li>
        <a>Download</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <div className="shadow-sm bg-base-100">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {lists}
            </ul>
          </div>
          <a className="font-bold text-xl">CS- Ticket System</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 mr-3">{lists}</ul>
        </div>

        <button className="btn btn-primary bg-linear-to-r from-[#422AD5] to-violet-500 font-medium">
          <img src={plusImg} alt="" />
          New Ticket
        </button>
      </div>
    </div>
  );
};

export default Navbar;
