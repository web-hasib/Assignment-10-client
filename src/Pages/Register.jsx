import React, {  use,  useState } from "react";
import { Link, useNavigate } from "react-router";

import { AuthContext } from './../Provider/AuthProvider';
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { Slide } from "react-awesome-reveal";
import register from '../../public/lottie/register.json'
import Lottie from "lottie-react";


const Register = () => {

  const {createUser,setUser,updateUser,loginWithGoogle} =use(AuthContext)
// const {createUser,user}= use(AuthContext);

  const [nameError, setNameError] = useState('')
  const [passError, setPassError] = useState('')
  const navigate = useNavigate()
  // console.log(loginWithGoogle);
  const handleRegister = (e) => {
    e.preventDefault();
    const form= e.target;
    const name = form.name.value;
    if(name.length < 5){
      setNameError('Name should be more then 5 char')
      return
    }
    else{
      setNameError('')
    }
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name,image,email,password);
    if(password.length <6){
      setPassError("Password must be equal or greater than 6")
      return;
  }
 
  if(!/[a-z]/.test(password)){
      setPassError("password must contain at least one lower case letter")
      return
  }
  if(!/[A-Z]/.test(password)){
      setPassError("password must contain at least one upper case letter")
      return
  }
  if(!/\d/.test(password)){
      setPassError("password must contain at least one number")
      return
  }
  
  setPassError('');

  createUser(email,password).then((res)=>{
    const user = res.user

    // add data to database
    fetch('https://recipe-book-server-gold.vercel.app/users',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        image
      })
    })
    

    // console.log(user);
    updateUser({displayName: name , photoURL: image}).then(()=>{
      // setUser(user)
      setUser({...user,displayName: name , photoURL: image })

      navigate('/')
    })
    .catch((error)=>{
      Swal.fire({
        icon: 'error', 
        title: 'Oops...',
        text: error.message,
        footer: '<a href="">Why do I have this issue?</a>'
      })
      //
      setUser(user)
    })
    setUser(user)
    // alert(`thanks for joining us ${name}`)
      Swal.fire({
        icon: 'success', 
        title: `Thanks for joining us ${name}`,
        
       
      })

  }).catch((error)=>{
    // toast.error(error.message);
     Swal.fire({
        icon: 'error', 
        title: 'Oops...',
        text: error.message,
        footer: '<a href="">Why do I have this issue?</a>'
      })
  });

    // console.log(name,image,email,password);
  };

// console.log(createUser);
  const handleGoogleLogin= ()=>{
      loginWithGoogle()
      .then((res) => {
        Swal.fire({
        icon: 'success', 
        title: 'Thanks for joining us',
        text: 'login successfully',
       
      })
      })
      .catch((error) => {
         Swal.fire({
        icon: 'error', 
        title: 'Oops...',
        text: error.message,
        footer: '<a href="">Why do I have this issue?</a>'
      })
      });
  }
  return (
    <div className="py-20">
      <Helmet>
        <title>RecipeBook || Register</title>
      </Helmet>
       <Slide direction="right">

      <div className="flex justify-around flex-col-reverse gap-5 md:flex-row items-center">
        <div className="card bg-base-100/20 w-full max-w-sm shrink-0 shadow-sm hover:shadow-md">
          <h2 className="font-semibold text-2xl text-center py-5">
            Register your Account
          </h2>

          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input rounded-lg"
                placeholder="Your Name"
                required
              />
              {nameError && <p className="text-xs text-red-500">{nameError}</p>}
              {/* img url  */}
              <label className="label">Photo URL</label>
              <input
                name="image"
                type="text"
                className="input rounded-lg"
                placeholder="Image URL"
                required
              />
              {/* email  */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input rounded-lg"
                placeholder="Email"
                required
              />
              {/* password  */}
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input rounded-lg"
                placeholder="Password"
                required
              />
              {passError && <p className="text-xs text-red-500">{passError}</p>}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              
              <button type="submit" className="btn btn-soft border-blue-300 rounded-lg px-7 hover:text-white btn-info mt-4">
                Register
              </button>
            </fieldset>
           
          </form>
           
          <div className="flex items-center justify-center">
              <button onClick={handleGoogleLogin} className=" border border-[#e5eaf2] rounded-md py-2 px-4 flex items-center gap-[20px] text-[1rem] text-[#9c8b8b] hover:bg-gray-50 transition-all duration-200 w-[calc(100%-40px)] font-bold  justify-center">
                <img
                  src="https://i.ibb.co/dQMmB8h/download-4-removebg-preview-1.png"
                  alt="google logo"
                  className="w-[23px]"
                />
                Sign in with Google
              </button>
            </div>
            <p className="py-3 pb-5 text-sm font-semibold text-accent text-center">
              Already have an account ?{" "}
              <Link to="/login" className="text-blue-500 underline">
                Login
              </Link>
            </p>
        </div>
        <div>
          {/* animation  */}
                    <Lottie
            style={{ height: "250px" }}
            animationData={register}
            loop={true}
          />
        </div>
      </div>
       </Slide>
    </div>
  );
};

export default Register;
