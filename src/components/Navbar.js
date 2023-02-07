import React from 'react';
import { AiOutlineSearch, AiOutlineClockCircle, AiOutlineGlobal, AiOutlineCustomerService, AiOutlineHeart, AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'
import { Badge } from 'antd';
import './Navbar.css';
import Logo from '../images/logo.png';

function Navbar() {

    const iconStyle = { color: "red", fontSize: "26px" }

    const items = [
        {
            icon: <AiOutlineClockCircle style={iconStyle} />,
            text: '09:00-21:00',
            border: true
        },
        {
            icon: <AiOutlineGlobal style={iconStyle} />,
            text: 'TM',
            border: true
        },
        {
            icon: <AiOutlineCustomerService style={iconStyle} />,
            text: 'Habarlaşmak',
            border: true
        },
        {
            icon: <AiOutlineHeart style={iconStyle} />,
            text: 'Halananlar',
            border: true
        },
        {
            icon: <AiOutlineUser style={iconStyle} />,
            text: 'Profil',
            border: false,
        }
    ]

    return (
        <div className='navbar-container'>
            <div className='navbar-header'>
                <div className='navbar-logo-container'>
                    <img src={Logo} alt='logo' />
                </div>
                <div className='navbar-search-container'>
                    <input placeholder='Gozleg' />
                    <AiOutlineSearch className='search' />
                </div>
                <div className='navbar-items-container'>
                    {items.map(item =>
                        <div className='navbar-item' style={!item.border ? {} : { borderRight: '1px rgb(180, 180, 180) solid' }} key={item.text}>
                            {item.icon}
                            <p>{item.text}</p>
                        </div>
                    )}
                </div>
                <div className='navbar-sebet'>
                    <Badge count='5' >
                        <AiOutlineShoppingCart style={iconStyle} />
                    </Badge>
                    <p>156.40 manat</p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;