import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";

import { AuthContext } from "./../Provider/AuthProvider";
import { Slide } from "react-awesome-reveal";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Login = () => {
  const { loginWithGoogle, logIn } = use(AuthContext);
  const location = useLocation();
  const Navigate = useNavigate();
  // console.log(location);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    logIn(email, password)
      .then((res) => {
        const user = res.user;
        // alert(`Thank you for joining us ${user.displayName}`);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Thank you for joining us ${user.displayName}`,
          showConfirmButton: false,
          timer: 1500,
        });
        // console.log(user);
        Navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
        Navigate("/");
      });
  };
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        // console.log(res.user);
        // alert("Thank you for joining us");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Thank you for joining us !`,
          showConfirmButton: false,
          timer: 1500,
        });

        Navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
        Navigate("/");
      });
  };
  return (
    <Slide direction="right">
       <Helmet>
        <title>RecipeBook || Login</title>
      </Helmet>
      <div className="py-20">
        <div className="flex justify-center items-center">
          <div className="card bg-base-100/20 w-full max-w-sm shrink-0 shadow hover:shadow-md">
            <h2 className="font-semibold text-2xl text-center py-5">
              Login your Account
            </h2>
            <form onSubmit={handleSubmit} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input rounded-lg"
                  placeholder="Email"
                  required
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input rounded-lg"
                  placeholder="Password"
                  required
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>

        

                <button type="submit" className="btn btn-soft border-blue-300 rounded-lg px-7 hover:text-white btn-info mt-4">
                  Login
                </button>
              </fieldset>
            </form>
            <div className="flex items-center justify-center">
              <button
                onClick={handleGoogleLogin}
                className=" border border-[#e5eaf2] rounded-md py-2 px-4 flex items-center gap-[20px] text-[1rem] text-[#9c8b8b] hover:bg-gray-50 transition-all duration-200 w-[calc(100%-40px)] font-bold  justify-center"
              >
                <img
                  src="https://i.ibb.co/dQMmB8h/download-4-removebg-preview-1.png"
                  alt="google logo"
                  className="w-[23px]"
                />
                Sign in with Google
              </button>
            </div>
            <p className="py-3 pb-5 text-sm font-semibold text-accent text-center">
              Don't have an account ?{" "}
              <Link to="/register" className="text-blue-500 underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Login;
