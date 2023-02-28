import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';
import '../product/Product.css';

function ProductsCategory() {
    return (
        <div className='category-products-container'>
            <div className='breadcrump'>
                <Link to='home/category'>Baş sahypa</Link>
                <AiOutlineRight />
                <Link to='home/product'>Kategoriýalar</Link>
                <AiOutlineRight />
                <Link to='home/product'>Azyk harytlary</Link>
            </div>
        </div >
    );
}

export default ProductsCategory;