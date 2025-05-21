import React from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content px-4 md:px-10 py-10">
      <Helmet>
        <title>RecipeBook || About </title>
      </Helmet>

      <Fade cascade damping={0.1} triggerOnce>
        <h1 className="text-4xl font-bold text-center mb-6">
          About Recipe Book
        </h1>
        <p className="max-w-3xl mx-auto text-center text-lg mb-10">
          Recipe Book is your one-stop digital cookbook, allowing food
          enthusiasts to share, discover, and manage delicious recipes from
          across the world. Built with love and flavor!
        </p>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="p-6 bg-base-200 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2">🌍 Explore Recipes</h2>
            <p>
              Discover top-rated recipes from Indian, Italian, Chinese, Mexican
              cuisines and more. Filter by cuisine or category and find the
              perfect dish for every mood.
            </p>
          </div>
          <div className="p-6 bg-base-200 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2">📝 Add & Manage</h2>
            <p>
              Log in to add your favorite recipes, update them later, or remove
              ones that no longer spark joy. Your personal recipe library,
              always available.
            </p>
          </div>
          <div className="p-6 bg-base-200 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2">❤️ Like & Wishlist</h2>
            <p>
              Show love to your favorite dishes with likes, and build a wishlist
              of the recipes you want to try next. The more popular a recipe,
              the higher it ranks!
            </p>
          </div>
          <div className="p-6 bg-base-200 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2">
              🔐 Secure & Responsive
            </h2>
            <p>
              Built with Firebase authentication and MongoDB database. Fully
              responsive UI with modern design, using React, Tailwind, DaisyUI,
              MambaUI and animations via Lottie & Awesome Reveal.
            </p>
          </div>
          <div className="p-6 md:col-span-2 bg-base-200  rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
              👨‍💻 About Me{" "}
            </h2>
            <p className="text-gray-500 italic">
              Hi, I'm Md Hasibul Islam, a passionate and creative MERN Stack
              Developer with a knack for building engaging, user-friendly web
              applications. I love bringing ideas to life through code and
              specialize in crafting dynamic interfaces using React, Tailwind
              CSS, and Firebase.
              <br />
              <br />
              Currently, I’m working on a full-featured Recipe Book App that
              showcases my skills in full-stack development, user
              authentication, and interactive UI design. From implementing
              protected routes to building real-time like/wishlist features, I
              enjoy solving problems and learning something new every day.
              <br />
              <br />
              Beyond coding, I’m driven by clean design, user experience, and
              performance optimization. Let’s connect and create something
              amazing together!
            </p>
          </div>
        </div>

        <div className="mt-14 text-center">
          <p className="text-lg font-medium">
            Recipe Book is crafted for developers and food lovers. Ready to
            share your next big flavor? Start cooking with us today!
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default About;
