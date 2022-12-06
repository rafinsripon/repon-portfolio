import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar';
import Home from '../Pages/Home/Home';


const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default Main;