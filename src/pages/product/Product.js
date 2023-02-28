import { React, useState, useContext } from 'react';
import { Carousel } from 'antd';
import { AiOutlineRight, AiOutlineLeft, AiFillCheckCircle, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { SebedimContext } from "../../context/Context";
import product from '../../images/product.webp';
import ahmadTea from '../../images/ahmadTea.webp';
import './Product.css';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';

function Product() {
    const { AddTo, Increment, Decrement } = useContext(SebedimContext);
    const [numberProduct, setNumberProduct] = useState(0)

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

    return (
        <div className='product-container'>
            <div className='breadcrump'>
                <Link to='home/category'>Baş sahypa</Link>
                <AiOutlineRight />
                <Link to='home/product'>Kategoriýalar</Link>
                <AiOutlineRight />
                <Link to='home/product'>Azyk harytlary</Link>
            </div>
            <h2 className='product-category-name'>Azyk harytlary</h2>
            <div className='product-details'>
                <div className='product-image'>
                    <Carousel autoplay draggable arrows={true} {...settings} >
                        <img className='carusel-img' src={product} alt='carousel1' />
                        <img className='carusel-img' src={product} alt='carousel1' />
                        <img className='carusel-img' src={product} alt='carousel1' />
                        <img className='carusel-img' src={product} alt='carousel1' />
                    </Carousel>
                </div>
                <div className='product-description'>
                    <h2 className='product-description-product-name'>Чай черный Ahmad Tea English Tea No.1 25 пакетиков</h2>
                    <Link className='brand-description'>
                        <img src={ahmadTea} alt='ahmadTea' />
                        <p>Ahmad Tea</p>
                    </Link>
                    <div className='other-description'>
                        <p>Kody: ST9974</p>
                        <div className='product-description-stock'>
                            <AiFillCheckCircle />
                            <p>Stokda bar</p>
                        </div>
                    </div>
                    <p className='product-description-price'>35 manat</p>
                    {numberProduct < 1 && <div className='product-description-add-basket' onClick={handleAddBasket} >Sebede goş</div>}
                    {numberProduct > 0 && <div className='increaseDecrease'>
                        <AiOutlineMinus className='increase-decrease-icons' onClick={handleDecrease} />
                        {numberProduct}
                        <AiOutlinePlus className='increase-decrease-icons' onClick={handleIncrease} />
                    </div>}
                </div>
            </div>

            <div className='product-description-cards'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default Product;