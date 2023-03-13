import { React, useState, useEffect } from 'react';
import { Menu } from 'antd';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import './Category.css';
import { axiosInstance } from '../config/axios';

function Category() {
    const [categoryData, setCategoryData] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const categories = JSON.parse(localStorage.getItem('turkmenExpress-categories'));
        if (!categories || (new Date() - categories[0]?.requested_time >= 1000 * 60 * 60 * 24 * 3)) {
            axiosInstance.get('library/categories-subcategories/list/').then(async (res) => {
                setCategoryData(res.data);
                res.data[0].requested_time = new Date();
                console.log(res.data)
                localStorage.setItem('turkmenExpress-categories', JSON.stringify(res.data))
            }).catch((err) => console.log(err));
        } else {
            setCategoryData(categories);
        }
    }, [])

    const items = [];

    categoryData?.forEach((element, index) => {
        items.push({
            key: `c${element.id}`,
            id: element.id,
            label: <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'no-wrap', height: '50px' }} onClick={() => navigate(`/category/${element.id}`, { state: element })}>{element.categories[index].name_tk}</div>,
            icon: <img className='category-logo' src={`https://turkmenexpress.com.tm/media/${element.categories[index].image}`} />,
            children: [],
        });
        if (element.categories[index].subcategories.length > 0) {
            element.categories[index].subcategories.forEach(subCategory => {
                items[index].children.push({
                    key: `s${subCategory.id}`,
                    id: subCategory.id,
                    label: subCategory.name_tk,
                    icon: <img className='category-logo' src={`https://turkmenexpress.com.tm/media/${subCategory.image}`} />,
                })
            })
        } else {
            delete items[index].children
        }
    });

    const handleMenuClick = (e) => {
        console.log(e)
        const splitted = e.key.split('s');
        navigate(`/subcategory/${splitted[1]}`);
    }

    return (
        <div className='category-container'>
            <div className='category-list'>
                <div className='category-list-header'>
                    <AiOutlineMenu style={{ color: 'grey', fontSize: '18px' }} />
                    <p>Kategoriyalar</p>
                </div>

                <Menu
                    // triggerSubMenuAction={(e) => console.log(e)}
                    onClick={(e) => handleMenuClick(e)}
                    style={{
                        width: '250px',
                        borderRadius: '0 0 10px 10px'
                    }}
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