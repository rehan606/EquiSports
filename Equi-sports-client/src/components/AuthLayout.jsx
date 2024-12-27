import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>

            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;