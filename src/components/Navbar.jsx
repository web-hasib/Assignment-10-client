import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { ThemeContext } from "../Theme/ThemeProvider";
import { CiLight } from "react-icons/ci";
import { LuSunMoon } from "react-icons/lu";

{
  /* <img src="https://i.ibb.co/jvscyq8R/2-removebg-preview.png" alt="" /> */
}
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const { theme, toggleTheme } = use(ThemeContext);
  // console.log(user?.email);
  const handleLogOut = () => {
    // console.log('user trying to log out');
    logOut()
      .then(() => {
        // Sign-out successful.
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Log out successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        // An error happened.
        Swal.fire(error.message);
      });
  };
  const links = (
    <>
      <NavLink className="hover:text-black hover:font-bold" to="/">
        {" "}
        Home
      </NavLink>
      <NavLink className="hover:text-black hover:font-bold" to="/allRecipes">
        {" "}
        All Recipes
      </NavLink>


      <NavLink className="hover:text-black hover:font-bold" to="/dashboard/stat">
        {" "}
        Dashboard
      </NavLink>
            <NavLink className="hover:text-black hover:font-bold" to="/about">
        {" "}
        About
      </NavLink>
            <NavLink className="hover:text-black hover:font-bold" to="/contact">
        {" "}
        Contact
      </NavLink>
          
    </>
  );
  return (
    <div className=" navbar max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="cursor-pointer p-0 mr-4 lg:hidden"
          >
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-5 gap-5 shadow "
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <img
            className="w-[30px] md:w-[40px] rounded-full"
            src="https://i.ibb.co/jvscyq8R/2-removebg-preview.png"
            alt=""
          />
          <a href="/" className="font-bold text-lg md:text-3xl text-blue-400">
            Recipe{" "}
            <span className="text-gray-600 text-xs md:text-lg">Book</span>
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex gap-4 font-semibold text-gray-600 ">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-5">
        {user?.photoURL && (
          <div className="relative group inline-block">
            <img
              className="w-8 h-8 rounded-full object-cover"
              src={user.photoURL}
              alt=""
            />
            <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 whitespace-nowrap">
              {user.displayName}
            </div>
          </div>
        )}

        {/* Theme Button */}
        <button onClick={toggleTheme} className="btn rounded-full">
          {theme === "light" ? (
            <LuSunMoon size={20} color="black" />
          ) : (
            <CiLight size={20} color="white" />
          )}
        </button>

        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-soft border-blue-300 rounded-2xl px-7 hover:text-white btn-info"
          >
            LogOut
          </button>
        ) : (
          <Link
            to="/login"
            className="btn btn-soft border-blue-300 rounded-2xl px-7 hover:text-white btn-info"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
