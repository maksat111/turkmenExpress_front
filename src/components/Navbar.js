import { React, useContext, useState } from 'react';
import { AiOutlineSearch, AiOutlineClockCircle, AiOutlinePlus, AiOutlineMinus, AiOutlineGlobal, AiOutlineCustomerService, AiOutlineHeart, AiOutlineUser, AiOutlineShoppingCart, AiOutlineDelete } from 'react-icons/ai'
import { Badge, Drawer } from 'antd';
import { SebedimContext } from "../context/Context";
import './Navbar.css';
import Logo from '../images/logo.png';
import product from '../images/product.webp';

function Navbar() {
    const { sebedim, Increment, Decrement } = useContext(SebedimContext);
    const [numberProduct, setNumberProduct] = useState(0);

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const handleIncrease = () => {
        setNumberProduct(numberProduct + 1);
        Increment(2);
    }
    const handleDecrease = () => {
        setNumberProduct(numberProduct - 1);
        Decrement(2);
    }

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

    const baha = sebedim[0] ? sebedim[0].baha.split(' ') : [0];
    const jemi = sebedim[0].sany * baha[0];

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
                <div className='navbar-sebet' onClick={showDrawer}>
                    <Badge count={sebedim[0].sany} >
                        <AiOutlineShoppingCart style={iconStyle} />
                    </Badge>
                    <p> {jemi ? jemi : '0'} manat</p>
                </div>
            </div>
            <Drawer
                title={`Sebetdäki harytlar`}
                placement="right"
                size='default'
                onClose={onClose}
                open={open}
            >
                <div className='sebet-container'>
                    <div className='sebet-card'>
                        <img src={product} alt='product' />
                        <div className='sebet-name-and-product'>
                            <p className='sebet-product-name'>Чай черный Ahmad Tea English Tea No.1 25 пакетиков</p>
                            <p className='sebet-product-price'>35 manat</p>
                        </div>
                        <div className='sebet-increaseDecrease'>
                            <AiOutlineMinus className='sebet-increase-decrease-icons' onClick={handleDecrease} />
                            {numberProduct}
                            <AiOutlinePlus className='sebet-increase-decrease-icons' onClick={handleIncrease} />
                        </div>
                        <div className='delete-icon-container'>
                            <AiOutlineDelete className='delete-icon' />
                        </div>
                    </div>
                    <div className='sebet-sargyt-button'>
                        Sargyr etmek ({jemi ? jemi : '0'}manat)
                    </div>
                </div>
            </Drawer>
        </div >
    );
}

export default Navbar;