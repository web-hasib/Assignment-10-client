import React, { use } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Pages/Loading";
import { ThemeContext } from "../Theme/ThemeProvider";

const MainLayout = () => {
  const { loading } = use(AuthContext);
  const { theme } = use(ThemeContext);
//   console.log(theme);
  return (
    <div>
      <header
        style={{
          backgroundImage:
            theme === "dark"
              ? ""
              : "url('https://i.ibb.co/C3nd0Qfx/Screenshot-2025-05-20-105358.png')",
          backgroundSize: "cover",
        }}
        className="bg-base-200"
      >
        <Navbar></Navbar>
      </header>
      <div
        style={{
          backgroundImage:
            theme === "dark"
              ? ""
              : "url('https://i.ibb.co/C3nd0Qfx/Screenshot-2025-05-20-105358.png')",
          backgroundSize: "cover",
        }}
      >
        <main className="min-h-[calc(100vh-340px)] max-w-7xl mx-auto">
          {loading ? <Loading /> : <Outlet></Outlet>}
        </main>
      </div>
      <footer className="">
        <Footer theme={theme}></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
