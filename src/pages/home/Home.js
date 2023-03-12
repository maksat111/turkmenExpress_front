import { React, useState } from 'react';
import { AiOutlineArrowDown, AiOutlineDown } from 'react-icons/ai';
import Card from '../../components/Card';
import CardGroup from '../../components/CardGroup';
import Carusel from '../../components/Carusel';
import banner from '../../images/banner.webp';
import down from '../../images/down.svg';
import './Home.css';

function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <div className='home-container'>
            <div className='banner-container'>
                <Carusel />
            </div>
            <CardGroup />
            <div className='button-container'>
                <div className='continue-button'>
                    <p>Dowamy</p>
                    <img src={down} alt='down' />
                </div>
            </div>
        </div>
    );
}

export default Home;