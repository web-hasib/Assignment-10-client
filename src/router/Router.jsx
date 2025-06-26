import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "./../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error from "../Pages/Error";
import AddRecipe from "../Pages/AddRecipe";
import AllRecipes from "../Pages/AllRecipes";
import RecipeDetails from "../Pages/RecipeDetails";
import MyRecipe from "../Pages/MyRecipe";
import UpdateRecipe from "../Pages/UpdateRecipe";
import PrivateRoute from "../Provider/PrivateRoute";
import About from "../Pages/About";
import Loading from "../Pages/Loading";
import Dashboard from "../Layouts/Dashboard";
import DashboardHome from "../Pages/DashboardHome";
import Contact from "../Pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        loader: () =>
          fetch("https://recipe-book-server-gold.vercel.app/topRecipes"),
        hydrateFallbackElement: <Loading></Loading>,
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },

      {
        path: "allRecipes",
        loader: () =>
          fetch("https://recipe-book-server-gold.vercel.app/recipes"),
        hydrateFallbackElement: <Loading></Loading>,

        element: <AllRecipes></AllRecipes>,
      },
      {
        path: "/recipes/:id",
        loader: ({ params }) =>
          fetch(
            `https://recipe-book-server-gold.vercel.app/recipes/${params.id}`
          ),
        hydrateFallbackElement: <Loading></Loading>,

        element: (
          <PrivateRoute>
            <RecipeDetails></RecipeDetails>
          </PrivateRoute>
        ),
      },

      {
        path: "update/:id",
        loader: ({ params }) =>
          fetch(
            `https://recipe-book-server-gold.vercel.app/recipes/${params.id}`
          ),
        hydrateFallbackElement: <Loading></Loading>,

        element: (
          <PrivateRoute>
            <UpdateRecipe></UpdateRecipe>
          </PrivateRoute>
        ),
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path:'contact',
        element: <Contact></Contact>
      }
    ],
  },
  {
    path: '/dashboard',
    element:<PrivateRoute>
      <Dashboard></Dashboard>
    </PrivateRoute>,
    children:[
      {
        path:'stat',
      
        element:<DashboardHome/>
      },
            {
        path: "addRecipe",
        element: (
          <PrivateRoute>
            <AddRecipe></AddRecipe>
          </PrivateRoute>
        ),
      },
            {
        path: "myRecipes",
        loader: () =>
          fetch("https://recipe-book-server-gold.vercel.app/recipes"),
        hydrateFallbackElement: <Loading></Loading>,

        element: (
          <PrivateRoute>
            <MyRecipe></MyRecipe>
          </PrivateRoute>
        ),
      },
    ]

  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
