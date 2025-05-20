import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div >
           <header style={{ backgroundImage: "url('https://i.ibb.co/C3nd0Qfx/Screenshot-2025-05-20-105358.png')",
           
            backgroundSize: 'cover',    
            }} className='bg-base-200'>
            <Navbar></Navbar>
           </header>
           <div style={{ backgroundImage: "url('https://i.ibb.co/Z1GqbvPk/mainBg.jpg')",
            backgroundSize: 'cover'
           }}>

           <main className='min-h-[calc(100vh-340px)] max-w-7xl mx-auto'>
            <Outlet></Outlet>
           </main>
           </div>
           <footer>
            <Footer></Footer>
           </footer>
        </div>
    );
};

export default MainLayout;