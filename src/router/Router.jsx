import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from './../Layouts/MainLayout';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Error from '../Pages/Error';
import AddRecipe from '../Pages/AddRecipe';
import AllRecipes from '../Pages/AllRecipes';
import RecipeDetails from '../Pages/RecipeDetails';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'addRecipe',
                element:<AddRecipe></AddRecipe>
            },
            {
                path:'allRecipes',
                loader:()=>fetch('http://localhost:3000/recipes'),
                element:<AllRecipes></AllRecipes>
            },
            {
                path:'/recipes/:id',
                loader:({params})=>fetch(`http://localhost:3000/recipes/${params.id}`),
                
                element:<RecipeDetails></RecipeDetails>
            }
        ]
    },
    {
        path: "*",
        element:<Error></Error>
    }
])