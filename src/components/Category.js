import React from 'react';
import { Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineFastfood } from 'react-icons/md';
import './Category.css';

function Category() {

    // const items = [
    //     {
    //         icon: <MdOutlineFastfood />,
    //         text: 'Azyk harytlar',
    //         subItems: [
    //             {
    //                 text: 'Gok onumler miweler',
    //             },
    //             {
    //                 text: 'Alkagolsyz icgiler',
    //             },
    //             {
    //                 text: 'Et we sohrat onumleri',
    //             },
    //             {
    //                 text: 'Suyt onumleri we yumurtga',
    //             },
    //             {
    //                 text: 'Gok onumler miweler',
    //             },
    //             {
    //                 text: 'Gok onumler miweler',
    //             },
    //         ]
    //     },
    //     {
    //         icon: <MdOutlineFastfood />,
    //         text: 'Azyk harytlar',
    //         subItems: [
    //             {
    //                 text: 'Gok onumler miweler',
    //             },
    //             {
    //                 text: 'Alkagolsyz icgiler',
    //             },
    //             {
    //                 text: 'Et we sohrat onumleri',
    //             },
    //             {
    //                 text: 'Suyt onumleri we yumurtga',
    //             },
    //             {
    //                 text: 'Gok onumler miweler',
    //             },
    //             {
    //                 text: 'Gok onumler miweler',
    //             },
    //         ]
    //     },
    //     {
    //         icon: <MdOutlineFastfood />,
    //         text: 'Azyk harytlar',
    //         subItems: [
    //             {
    //                 text: 'Gok onumler miweler',
    //             },
    //             {
    //                 text: 'Alkagolsyz icgiler',
    //             },
    //             {
    //                 text: 'Et we sohrat onumleri',
    //             },
    //             {
    //                 text: 'Suyt onumleri we yumurtga',
    //             },
    //             {
    //                 text: 'Gok onumler miweler',
    //             },
    //             {
    //                 text: 'Gok onumler miweler',
    //             },
    //         ]
    //     },
    //     {
    //         icon: <MdOutlineFastfood />,
    //         text: 'Azyk harytlar',
    //         subItems: [
    //             {
    //                 text: 'Gok onumler miweler',
    //             },
    //             {
    //                 text: 'Alkagolsyz icgiler',
    //             },
    //             {
    //                 text: 'Et we sohrat onumleri',
    //             },
    //             {
    //                 text: 'Suyt onumleri we yumurtga',
    //             },
    //             {
    //                 text: 'Gok onumler miweler',
    //             },
    //             {
    //                 text: 'Gok onumler miweler',
    //             },
    //         ]
    //     },
    //     {
    //         icon: <MdOutlineFastfood />,
    //         text: 'Azyk harytlar',
    //         subItems: [
    //             {
    //                 text: 'Gok onumler miweler',
    //             },
    //             {
    //                 text: 'Alkagolsyz icgiler',
    //             },
    //             {
    //                 text: 'Et we sohrat onumleri',
    //             },
    //             {
    //                 text: 'Suyt onumleri we yumurtga',
    //             },
    //             {
    //                 text: 'Gok onumler miweler',
    //             },
    //             {
    //                 text: 'Gok onumler miweler',
    //             },
    //         ]
    //     },
    // ]

    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }

    const items = [
        getItem('Azyk harytlar', 'sub1', <AiOutlineMenu />, [
            getItem('Suyt onumleri we yumurtga', '3'),
            getItem('Et we sohrat onumleri', '4'),
            getItem('Gok onumler, miweler, otlar', '5'),
            getItem('Tayyar ertirlikler, ballar, we sokolad kremler', '6'),
            getItem('Cay, kakao, kofe, kofe onumleri', '7'),
            getItem('Konsenwirlenen onumler', '8'),
        ]),
        getItem('Taze yyl harytlary', 'sub2', <AiOutlineMenu />, [
            getItem('Taze yyl sowgatlary', '7'),
        ]),
        getItem('Saglyk we gozellik', 'sub3', <AiOutlineMenu />, [
            getItem('Yuz ucin ideg', '7'),
            getItem('El, ayak we beden ucin ideg', '8'),
            getItem('Saclar ucin ideg', '9'),
            getItem('Sabynlar', '10'),
            getItem('Sampunlar', '11'),
            getItem('Dus gelleri', '12'),
            getItem('Sac boyaglary', '13'),
        ]),
        getItem('Azyk harytlar', 'sub4', <AiOutlineMenu />, [
            getItem('Suyt onumleri we yumurtga', '3'),
            getItem('Et we sohrat onumleri', '4'),
            getItem('Gok onumler, miweler, otlar', '5'),
            getItem('Tayyar ertirlikler, ballar, we sokolad kremler', '6'),
            getItem('Cay, kakao, kofe, kofe onumleri', '7'),
            getItem('Konsenwirlenen onumler', '8'),
        ]),
        getItem('Taze yyl harytlary', 'sub5', <AiOutlineMenu />, [
            getItem('Taze yyl sowgatlary', '7'),
        ]),
        getItem('Saglyk we gozellik', 'sub6', <AiOutlineMenu />, [
            getItem('Yuz ucin ideg', '7'),
            getItem('El, ayak we beden ucin ideg', '8'),
            getItem('Saclar ucin ideg', '9'),
            getItem('Sabynlar', '10'),
            getItem('Sampunlar', '11'),
            getItem('Dus gelleri', '12'),
            getItem('Sac boyaglary', '13'),
        ]),
        getItem('Azyk harytlar', 'sub7', <AiOutlineMenu />, [
            getItem('Suyt onumleri we yumurtga', '3'),
            getItem('Et we sohrat onumleri', '4'),
            getItem('Gok onumler, miweler, otlar', '5'),
            getItem('Tayyar ertirlikler, ballar, we sokolad kremler', '6'),
            getItem('Cay, kakao, kofe, kofe onumleri', '7'),
            getItem('Konsenwirlenen onumler', '8'),
        ]),
        getItem('Taze yyl harytlary', 'sub8', <AiOutlineMenu />, [
            getItem('Taze yyl sowgatlary', '7'),
        ]),
        getItem('Saglyk we gozellik', 'sub9', <AiOutlineMenu />, [
            getItem('Yuz ucin ideg', '7'),
            getItem('El, ayak we beden ucin ideg', '8'),
            getItem('Saclar ucin ideg', '9'),
            getItem('Sabynlar', '10'),
            getItem('Sampunlar', '11'),
            getItem('Dus gelleri', '12'),
            getItem('Sac boyaglary', '13'),
        ]),
        getItem('Azyk harytlar', 'sub10', <AiOutlineMenu />, [
            getItem('Suyt onumleri we yumurtga', '3'),
            getItem('Et we sohrat onumleri', '4'),
            getItem('Gok onumler, miweler, otlar', '5'),
            getItem('Tayyar ertirlikler, ballar, we sokolad kremler', '6'),
            getItem('Cay, kakao, kofe, kofe onumleri', '7'),
            getItem('Konsenwirlenen onumler', '8'),
        ]),
        getItem('Taze yyl harytlary', 'sub12', <AiOutlineMenu />, [
            getItem('Taze yyl sowgatlary', '7'),
        ]),
        getItem('Saglyk we gozellik', 'sub13', <AiOutlineMenu />, [
            getItem('Yuz ucin ideg', '7'),
            getItem('El, ayak we beden ucin ideg', '8'),
            getItem('Saclar ucin ideg', '9'),
            getItem('Sabynlar', '10'),
            getItem('Sampunlar', '11'),
            getItem('Dus gelleri', '12'),
            getItem('Sac boyaglary', '13'),
        ]),

    ];

    return (
        <div className='category-container'>
            <div className='category-list'>
                <div className='category-list-header'>
                    <AiOutlineMenu />
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
                        width: 256,
                    }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
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