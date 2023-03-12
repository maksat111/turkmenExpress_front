import { Badge } from 'antd';
import { React, useContext, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { baseUrl } from '../config/axios';
import { SebedimContext } from "../context/Context";
import './Card.css';

function Card({ discount, product_name, product_price, old_price, new_product, image }) {
    const { AddTo, Increment, Decrement } = useContext(SebedimContext);
    const [numberProduct, setNumberProduct] = useState(0);

    const handleAddBasket = () => {
        setNumberProduct(1);
        AddTo(2, 'Stakan LAV SUD25 6sany 315cc*140mm', '35 Manat');
    }

    const handleIncrease = () => {
        setNumberProduct(numberProduct + 1);
        Increment(2);
    }

    const handleDecrease = () => {
        setNumberProduct(numberProduct - 1);
        Decrement(2);
    }

    return (
        <Link to='/home/product' className='product-card-container'>
            <div className='card-image'>
                <div className='card-status'>
                    {new_product && <div className='new'>Täze</div>}
                    {old_price && <div className='discount'>10%</div>}
                </div>
                <img src={image} alt='product' />
                <div className='basket-container'>
                    {numberProduct == 0 && <><div className='basket-icon'>
                        <AiOutlineShoppingCart />
                    </div>
                        <div className='add-basket' onClick={handleAddBasket}>
                            Sebede goş
                    </div></>}
                    {numberProduct > 0 && <div className='increaseDecrease'>
                        <AiOutlineMinus className='increase-decrease-icons' onClick={handleDecrease} />
                        {numberProduct}
                        <AiOutlinePlus className='increase-decrease-icons' onClick={handleIncrease} />
                    </div>}
                </div>
            </div>
            <div className='card-content'>
                <p className='product-name'>{product_name}</p>
                <p className='product-price'>{Math.round(product_price * 100) / 100} TMT</p>
                {old_price && <p className='product-old-price'>40 manat</p>}
            </div>
        </Link >
    );
}

export default Card;