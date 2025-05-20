import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from './../Layouts/MainLayout';
import Home from '../Pages/Home';
import Login from '../Pages/Login';

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
            }
        ]
    }
])