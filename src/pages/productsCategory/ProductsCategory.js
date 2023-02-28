import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';
import '../product/Product.css';
import './ProductsCategory.css';
import Card from '../../components/Card';

function ProductsCategory() {
    return (
        <div className='category-products-container'>
            <div className='breadcrump'>
                <Link to='/home/category'>Baş sahypa</Link>
                <AiOutlineRight />
                <Link to='/home/product'>Kategoriýalar</Link>
                <AiOutlineRight />
                <Link to='/home/product'>Azyk harytlary</Link>
            </div>
            <h2 className='product-category-name'>Azyk harytlary</h2>
            <div className='subcategory-container'>
                <div className='breadcrump'>
                    Alkogolsyz içgiler
                </div>
                <div className='breadcrump'>
                    Suyt onumleri we yumurtga
                </div>
                <div className='breadcrump'>
                    Alkogolsyz içgiler
                </div>
                <div className='breadcrump'>
                    Alkogolly içgiler
                </div>
                <div className='breadcrump'>
                    Spirtli içgiler
                </div>
                <div className='breadcrump'>
                    Alkogolsyz içgiler
                </div>
                <div className='breadcrump'>
                    Alkogolsyz içgiler
                </div>
                <div className='breadcrump'>
                    Alkogolsyz içgiler
                </div>
                <div className='breadcrump'>
                    Alkogolsyz içgiler
                </div>
                <div className='breadcrump'>
                    Alkogolsyz içgiler
                </div>
            </div>
            <div className='category-product-card-container'>
                <div className='filter-container'>
                    <div className='filter-left-side'>
                        <div className='breadcrump'>
                            Hemmesi
                        </div>
                        <div className='breadcrump'>
                            Arlaşykdakylar
                        </div>
                        <div className='breadcrump'>
                            Täze
                        </div>
                    </div>
                    <div className='filter-right-side'>
                        <div className='breadcrump'>
                            Hödürlenýän tertipde
                        </div>
                    </div>
                </div>
                <div className='product-description-cards'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div >
    );
}

export default ProductsCategory;