import React, { use } from "react";
import { NavLink, Outlet } from "react-router";
import { ThemeContext } from "../Theme/ThemeProvider";
import { AuthContext } from "../Provider/AuthProvider";
import { LuSunMoon } from "react-icons/lu";
import { CiLight } from "react-icons/ci";
import Swal from "sweetalert2";

const Dashboard = () => {
  const { user, logOut } = use(AuthContext);
  const { theme, toggleTheme } = use(ThemeContext);
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
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col relative">
        {/* Navbar */}
        <div className="navbar bg-base-300/60 w-full sticky z-1 top-0">
          <div className="mx-2 flex-1 px-2 flex items-center justify-between ">
            {/* logo  */}
            <div className="flex  items-center gap-3 lg:hidden">
              <img
                className="w-[30px] md:w-[40px] rounded-full"
                src="https://i.ibb.co/jvscyq8R/2-removebg-preview.png"
                alt=""
              />
              <a
                href="/"
                className="font-bold text-lg md:text-3xl text-blue-400"
              >
                Recipe{" "}
                <span className="text-gray-600 text-xs md:text-lg">Book</span>
              </a>
            </div>
            <div className="hidden lg:flex">

            </div>
            {/* nav end  */}
            <div className="flex flex-end items-center gap-4">
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

          <div className=" lg:hidden ">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>

        {/* Page content here */}
        <div className="max-w-7xl mx-auto">

        <Outlet></Outlet>
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 gap-4">
          {/* Sidebar content here */}
          <div className="pb-10 flex justify-between items-center">
            {/* logo  */}
            <div className="flex items-center gap-3">
              <img
                className="w-[30px] md:w-[40px] rounded-full"
                src="https://i.ibb.co/jvscyq8R/2-removebg-preview.png"
                alt=""
              />
              <a
                href="/"
                className="font-bold text-lg md:text-3xl text-blue-400"
              >
                Recipe{" "}
                <span className="text-gray-600 text-xs md:text-lg">Book</span>
              </a>
            </div>

          </div>

       

          <NavLink className="hover:text-black hover:font-bold" to="/dashboard">
            Dashboard
          </NavLink>

          <NavLink className="hover:text-black hover:font-bold" to="/dashboard/addRecipe">
            {" "}
            Add Recipe
          </NavLink>
          <NavLink className="hover:text-black hover:font-bold" to="/dashboard/myRecipes">
            {" "}
            My Recipes
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
