import React from 'react';
import Carusel from '../../components/Carusel';
import banner from '../../images/banner.webp';
import './Home.css';

function Home() {
    return (
        <div className='home-container'>
            <div className='banner-container'>
                <div className='banner-item1'>
                    <Carusel />
                </div>
                <div className='banner-item2'>
                    <img src={banner} alt='banner' />
                </div>
            </div>
        </div>
    );
}

export default Home;