import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
           <header>
            <Navbar></Navbar>
           </header>
           <main>
            <Outlet></Outlet>
           </main>
        </div>
    );
};

export default MainLayout;