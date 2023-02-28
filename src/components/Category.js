import { React, useState, useEffect } from 'react';
import { Menu } from 'antd';
import { Outlet, Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineFastfood } from 'react-icons/md';
import './Category.css';
import { axiosInstance } from '../config/axios';

function Category() {
    const [categoryData, setCategoryData] = useState();

    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }

    // const getCategory = async () => {
    //     const data = await axiosInstance.get('library/categories/list');
    //     // const data = await fetch('http://turkmenexpress.com.tm/api/library/categories/list', { method: 'HEAD', mode: 'no-cors' });
    //     console.log(data);
    // }

    // useEffect(() => {
    //     getCategory();
    // }, [])

    const items = [
        getItem(<Link to="/home/azyk" className='navbar_item'>Taze yyl harytlary</Link>, 'sub14', <MdOutlineFastfood />, [
            getItem('Suyt onumleri we yumurtga', '1'),
            getItem('Et we sohrat onumleri', '2'),
            getItem('Gok onumler, miweler, otlar', '3'),
            getItem('Tayyar ertirlikler, ballar, we sokolad kremler', '4'),
            getItem('Cay, kakao, kofe, kofe onumleri', '5'),
            getItem('Konsenwirlenen onumler', '6'),
        ]),
        getItem('Taze yyl harytlary', 'sub2', <AiOutlineMenu />, [
            getItem('Taze yyl sowgatlary', '7'),
        ]),
        getItem('Saglyk we gozellik', 'sub3', <AiOutlineMenu />, [
            getItem('Yuz ucin ideg', '8'),
            getItem('El, ayak we beden ucin ideg', '9'),
            getItem('Saclar ucin ideg', '10'),
            getItem('Sabynlar', '11'),
            getItem('Sampunlar', '12'),
            getItem('Dus gelleri', '13'),
            getItem('Sac boyaglary', '14'),
        ]),
        getItem('Azyk harytlar', 'sub4', <MdOutlineFastfood />, [
            getItem('Suyt onumleri we yumurtga', '15'),
            getItem('Et we sohrat onumleri', '16'),
            getItem('Gok onumler, miweler, otlar', '17'),
            getItem('Tayyar ertirlikler, ballar, we sokolad kremler', '18'),
            getItem('Cay, kakao, kofe, kofe onumleri', '19'),
            getItem('Konsenwirlenen onumler', '20'),
        ]),
        getItem('Taze yyl harytlary', 'sub5', <AiOutlineMenu />, [
            getItem('Taze yyl sowgatlary', '21'),
        ]),
        getItem('Saglyk we gozellik', 'sub6', <AiOutlineMenu />, [
            getItem('Yuz ucin ideg', '22'),
            getItem('El, ayak we beden ucin ideg', '23'),
            getItem('Saclar ucin ideg', '24'),
            getItem('Sabynlar', '25'),
            getItem('Sampunlar', '26'),
            getItem('Dus gelleri', '27'),
            getItem('Sac boyaglary', '28'),
        ]),
        getItem('Azyk harytlar', 'sub7', <MdOutlineFastfood />, [
            getItem('Suyt onumleri we yumurtga', '29'),
            getItem('Et we sohrat onumleri', '30'),
            getItem('Gok onumler, miweler, otlar', '31'),
            getItem('Tayyar ertirlikler, ballar, we sokolad kremler', '32'),
            getItem('Cay, kakao, kofe, kofe onumleri', '33'),
            getItem('Konsenwirlenen onumler', '34'),
        ]),
        getItem('Taze yyl harytlary', 'sub8', <AiOutlineMenu />, [
            getItem('Taze yyl sowgatlary', '35'),
        ]),
        getItem('Saglyk we gozellik', 'sub9', <AiOutlineMenu />, [
            getItem('Yuz ucin ideg', '36'),
            getItem('El, ayak we beden ucin ideg', '37'),
            getItem('Saclar ucin ideg', '38'),
            getItem('Sabynlar', '39'),
            getItem('Sampunlar', '40'),
            getItem('Dus gelleri', '41'),
            getItem('Sac boyaglary', '42'),
        ]),
        getItem('Azyk harytlar', 'sub10', <MdOutlineFastfood />, [
            getItem('Suyt onumleri we yumurtga', '43'),
            getItem('Et we sohrat onumleri', '44'),
            getItem('Gok onumler, miweler, otlar', '45'),
            getItem('Tayyar ertirlikler, ballar, we sokolad kremler', '46'),
            getItem('Cay, kakao, kofe, kofe onumleri', '47'),
            getItem('Konsenwirlenen onumler', '48'),
        ]),
        getItem('Taze yyl harytlary', 'sub12', <AiOutlineMenu />, [
            getItem('Taze yyl sowgatlary', '49'),
        ]),
        getItem('Saglyk we gozellik', 'sub13', <AiOutlineMenu />, [
            getItem('Yuz ucin ideg', '50'),
            getItem('El, ayak we beden ucin ideg', '51'),
            getItem('Saclar ucin ideg', '52'),
            getItem('Sabynlar', '53'),
            getItem('Sampunlar', '54'),
            getItem('Dus gelleri', '55'),
            getItem('Sac boyaglary', '56'),
        ]),

    ];

    return (
        <div className='category-container'>
            <div className='category-list'>
                <div className='category-list-header'>
                    <AiOutlineMenu style={{ color: 'grey', fontSize: '18px' }} />
                    <p>Kategoriyalar</p>
                </div>
                {/* <div className='category-list-items'>
                    {items.map(item =>
                        <div className='category-item'>
                            {item.icon}

                        </div>
                    )}
                </div> */}

                <Menu
                    style={{
                        width: '250px',
                        borderRadius: '0 0 10px 10px'
                    }}
                    // defaultSelectedKeys={['1']}
                    // defaultOpenKeys={['sub1']}
                    mode='vertical'
                    theme='light'
                    items={items}
                />
            </div>
            <Outlet />
        </div>
    );
}

export default Category;