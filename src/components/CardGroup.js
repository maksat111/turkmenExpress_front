import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';
import Card from './Card';
import './CardGroup.css';
import { axiosInstance } from '../config/axios';

function CardGroup({ nextData }) {
    const [homeData, setHomeData] = useState([]);

    useEffect(() => {
        axiosInstance.get('products/mainpage/list/').then(res => {
            setHomeData(res.data.results);
        }).catch(err => console.log(err));
    }, []);

    useEffect(() => {
        setHomeData([...homeData, ...nextData]);
    }, [nextData])

    return (
        <>
            { homeData?.map((item, index) =>
                <div className='card-group-container' key={item.id}>
                    <div className='group-name-container'>
                        <p className='group-name'>{item.name_tk}</p>
                        <Link to='/home/azyk' className='group-show-all'>
                            <p>Ählisi</p>
                            <AiOutlineRight />
                        </Link>
                    </div>
                    <div className='group-card-container'>
                        {item.products.map(product =>
                            <Card
                                key={product.id}
                                id={product.id}
                                image={product.main_image}
                                product_name={product.name_tk}
                                product_price={product.price}
                            />
                        )}
                    </div>
                </div>
            )
            }
        </>
    );
}

export default CardGroup;