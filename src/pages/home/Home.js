import { React, useState } from 'react';
import { AiOutlineArrowDown, AiOutlineDown } from 'react-icons/ai';
import Card from '../../components/Card';
import CardGroup from '../../components/CardGroup';
import Carusel from '../../components/Carusel';
import banner from '../../images/banner.webp';
import down from '../../images/down.svg';
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
            <CardGroup groupName={'Taze harytlar'} />
            <CardGroup groupName={'Arzanladyşdaky harytlar'} />
            <CardGroup groupName={'Azyk harytlary'} />
            <CardGroup groupName={'Täze ýyl harytlary'} />
            <CardGroup groupName={'Saglyk we gözellik'} />
            <CardGroup groupName={'Arassaçylyk serişdeleri'} />
            <CardGroup groupName={'Çagalar üçin'} />
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