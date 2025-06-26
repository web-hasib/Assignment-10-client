import React, { useState } from "react";
import Swal from "sweetalert2";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid email!",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Thanks for subscribing!",
      text: `We've added ${email} to our newsletter list.`,
      timer: 2000,
      showConfirmButton: false,
    });

    setEmail(""); // Clear input after success
  };

  return (
    <div className=" bg-gradient-to-r from-blue-100/10 to-blue-300/10 rounded-2xl py-20 px-4 md:px-0">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-400 ">📩 Subscribe to Our Newsletter</h2>
        <p className="text-base-content/40 text-[9px] md:text-sm max-w-sm md:max-w-lg lg:max-w-xl mx-auto">
          Stay updated with our latest recipes, tips, and exclusive offers. Enter your email to join our newsletter.
        </p>

        <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row items-center justify-center mt-8">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered rounded-bl-2xl rounded-tl-2xl p-5 w-full max-w-xs"
            required
          />
          <button type="submit" className="btn btn-soft border-blue-300 px-7 hover:text-white btn-info rounded-br-2xl rounded-tr-2xl">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
