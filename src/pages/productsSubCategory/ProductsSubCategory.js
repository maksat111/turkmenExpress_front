import React, { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import '../product/ProductDetails.css';
import './ProductsSubCategory.css';
import Card from '../../components/Card';
import { axiosInstance } from '../../config/axios';
import { Carousel } from 'antd';

function ProductsCategory() {
    const { id } = useParams();
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [state, setState] = useState(null);
    const [foundedCategory, setFoundedCategory] = useState(null);


    // useEffect(() => {
    //     const categories = JSON.parse(localStorage.getItem('turkmenExpress-categories'));
    //     const foundedCategory = categories[0].categories.find(item => item.id == id);
    //     setState(foundedCategory);
    // }, [id])

    useEffect(() => {
        axiosInstance.get(`products/subcategory/${id}/list/`).then((res) => {
            setCategoryProducts(res.data);
            const categories = JSON.parse(localStorage.getItem('turkmenExpress-categories'));
            categories[0].categories.forEach(element => {
                element.subcategories.forEach(item => {
                    if (item.id == id) {
                        setState(item);
                        setFoundedCategory(element);
                    }
                })
            });
        }).catch(err => console.log(err));
    }, [id]);

    const SampleNextArrow = props => {
        const { className, style, onClick } = props
        return (
            <div
                className={className}
                style={{
                    ...style,
                    color: 'black',
                    fontSize: '20px',
                    lineHeight: '1.5715',
                    left: '95%',
                    height: 'inherit',
                }}
                onClick={onClick}
            >
                <AiOutlineRight />
            </div>
        )
    }

    const SamplePrevArrow = props => {
        const { className, style, onClick } = props
        return (
            <div
                className={className}
                style={{
                    ...style,
                    color: 'black',
                    fontSize: '20px',
                    lineHeight: '1.5715',
                    left: '10px',
                    zIndex: '10',
                    // backgroundColor: 
                    // borderRadius: '100%',
                    // backgroundColor: '#ccc',
                    // height: '50px',
                    // width: '50px',
                    // display: 'flex',
                    // alignItems: 'center',
                    // justifyContent: 'center',
                    // opacity: '0.7'
                }}
                onClick={onClick}
            >
                <AiOutlineLeft />
            </div>
        )
    }

    const settings = {
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }

    const handleContinue = () => {

    }

    return (
        <div className='category-products-container'>
            <div className='breadcrump'>
                <Link to='/'>Baş sahypa</Link>
                <AiOutlineRight />
                <Link to={`/category/${foundedCategory?.id}`}>{foundedCategory?.name_tk}</Link>
                <AiOutlineRight />
                <Link>{state?.name_tk}</Link>
            </div>
            <h2 className='product-category-name' style={{ marginTop: '20px' }}>{state?.name_tk}</h2>
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
                    {categoryProducts?.map(product => <Card
                        key={product.id}
                        id={product.id}
                        image={product.main_image}
                        product_name={product.name_tk}
                        product_price={product.price}
                    />)}
                </div>
            </div>
        </div >
    );
}

export default ProductsCategory;