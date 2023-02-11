import React from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import Logo from '../images/logo.png';
import Android from '../images/android.svg';
import Ios from '../images/ios.svg';
import './Footer.css';

function Footer() {

    const items = [
        {

        }
    ]
    return (
        <div className='footer-container'>
            <div className='footer-above'>
                <div className='logo-container'>
                    <img src={Logo} alt='logo' />
                    <h2>Tiz Ýeňil Amatly</h2>
                </div>

                <div className='footer-items'>
                    <h2>Biz barada</h2>
                    <p>Biz barada</p>
                    <p>ELtip bermek we tölemek</p>
                    <p>Sargyt etmek</p>
                    <p>Sorag-jogap</p>
                </div>

                <div className='footer-items'>
                    <h2>Hyzmatdaşlyk</h2>
                    <p>Hyzmatdaşlyk</p>
                    <p>Markalar</p>
                </div>

                <div className='footer-items'>
                    <h2>Ulanyş düzgünleri</h2>
                    <p>Ulanyş düzgünleri</p>
                    <p>Gizlinlik ýörelgesi</p>
                </div>

                <div className='footer-items'>
                    <h2>Kömek</h2>
                    <p>Kömek we goldaw</p>
                    <p>E-poçtalarymyz</p>
                    <p>Habarlaşmak</p>
                </div>

                <div className='last-footer-item'>
                    <h2>Telefon belgimiz</h2>
                    <div className='phone-number'>
                        <AiOutlinePhone />
                        <p>+993 65 72-43-11</p>
                    </div>
                    <p className='footer-text'>Telefon üçin programmalar:</p>
                    <div className='download-application'>
                        <img src={Ios} alt='Ios' />
                        <img src={Android} alt='android' />
                    </div>
                </div>
            </div>

            <div className='footer-below'>
                <p>Made with ♥ by Maksat Akmyradov</p>
            </div>

        </div>
    );
}

export default Footer;