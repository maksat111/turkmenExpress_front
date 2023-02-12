import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

function ProductList({ productName }) {
    return (
        <div className='product-list-container'>
            <div className='product-name'>
                <h2>{productName}</h2>
                <div>
                    <p>Ählisi</p>
                    <AiOutlineArrowRight />
                </div>
                <div className='product-card-container'>
                    <div className='product-card'>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;