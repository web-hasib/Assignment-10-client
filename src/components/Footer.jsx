import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer
      style={{ backgroundImage: "url('https://i.ibb.co/CpCMtPPK/13.jpg')" }}
      className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded pt-10 pb-5"
    >
      <div className="flex items-center gap-3">
        <img
          className="w-[30px] md:w-[40px] rounded-full"
          src="https://i.ibb.co/jvscyq8R/2-removebg-preview.png"
          alt=""
        />
        <a href="/" className="font-bold text-lg md:text-3xl text-blue-400">
          Recipe <span className="text-gray-600 text-xs md:text-lg">Book</span>
        </a>
      </div>
      <div className="flex gap-3">
        <NavLink className="hover:text-black hover:font-bold" to="/">
          {" "}
          Home
        </NavLink>
        <NavLink className="hover:text-black hover:font-bold" to="/my-profile">
          {" "}
          All Recipes
        </NavLink>
        {/* <NavLink className="hover:text-black hover:font-bold" to="/my-profile">
        {" "}
        Add Recipe 
      </NavLink>
      <NavLink className="hover:text-black hover:font-bold" to="/my-profile">
        {" "}
        My Recipes
      </NavLink> */}
      </div>
      <nav>
        {/* Social Media Links */}
        <div className="flex justify-center md:justify-end space-x-4 text-xl">
          <a
            href="https://www.facebook.com/web.hasibul/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com/Hasibul9285"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/__md_hasibul_islam__/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/-hasibul-islam-/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
        </div>
      </nav>
      <aside className="w-full">
        <p className="text-xs font-thin italic text-gray-400">
          Copyright © {new Date().getFullYear()} - All right reserved by Hasib
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
