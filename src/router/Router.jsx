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
import MyRecipe from '../Pages/MyRecipe';
import UpdateRecipe from '../Pages/UpdateRecipe';
import PrivateRoute from '../Provider/PrivateRoute';
import About from '../Pages/About';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                index:true,
                loader:()=>fetch('http://localhost:3000/topRecipes'),
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
                element:<PrivateRoute>
                    <AddRecipe></AddRecipe>
                </PrivateRoute>
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
            },
            {
                path:'myRecipes',
                loader:()=>fetch('http://localhost:3000/recipes'),
                element:<PrivateRoute>
                    <MyRecipe></MyRecipe>
                </PrivateRoute>
            },{
                path:'update/:id',
                loader:({params})=>fetch(`http://localhost:3000/recipes/${params.id}`),
                element:<PrivateRoute>
                    <UpdateRecipe></UpdateRecipe>
                </PrivateRoute>
            },
            {
                path:'about',
                element:<About></About>
            }
        ]
    },
    {
        path: "*",
        element:<Error></Error>
    }
])