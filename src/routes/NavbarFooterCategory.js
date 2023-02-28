import React from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { isLogin } from '../utils/index';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function NavbarFooterCategory({ path, element, isProtected }) {
    const location = useLocation();

    if (isProtected && !isLogin()) {
        return <Navigate to="/" replace state={{ from: location }} />;
    }

    return (
        <>
            <Navbar />
            <Routes>
                <Route path={path} element={element} />
            </Routes>
            <Footer />
        </>
    );
}

export default NavbarFooterCategory;