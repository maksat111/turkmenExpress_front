import React from 'react';
import product from '../images/product.webp';
import './Card.css';

function Card() {
    return (
        <div className='product-card-container'>
            <div className='card-image'>
                <img src={product} alt='product' />
                <div className='card-status'>
                    <div className='new'>Täze</div>
                    <div className='skidka'>10%</div>
                </div>
            </div>
            <div className='card-content'>
                <p className='product-name'>Stakan LAV SUD25 6sany 315cc*140mm</p>
                <p className='product-price'>35 manat</p>
                <p className='old-price'>40 manat</p>
            </div>
        </div>
    );
}

export default Card;