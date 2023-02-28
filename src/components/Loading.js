import React from 'react';
import logo from '../images/logo.png';
import './Loading.css';

function Loading() {
    return (
        <div className="loading-container">
            <img src={logo} alt='loading...' />
        </div>
    );
}

export default Loading;