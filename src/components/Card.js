import { React, useContext, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SebedimContext } from "../context/Context";
import product from '../images/product.webp';
import './Card.css';

function Card() {
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
                    <div className='new'>Täze</div>
                    <div className='discount'>10%</div>
                </div>
                <img src={product} alt='product' />
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
                <p className='product-name'>Stakan LAV SUD25 6sany 315cc*140mm</p>
                <p className='product-price'>35 manat</p>
                <p className='product-old-price'>40 manat</p>
            </div>
        </Link >
    );
}

export default Card;