import { React, useState, useContext, useEffect } from 'react';
import { Carousel } from 'antd';
import { AiOutlineRight, AiOutlineLeft, AiFillCheckCircle, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { SebedimContext } from "../../context/Context";
import product from '../../images/product.webp';
import ahmadTea from '../../images/ahmadTea.webp';
import './ProductDetails.css';
import { Link, useParams } from 'react-router-dom';
import Card from '../../components/Card';
import { axiosInstance } from '../../config/axios';

function Product() {
    const [productDetail, setProductDetail] = useState(null);
    const { AddTo, Increment, Decrement } = useContext(SebedimContext);
    const [numberProduct, setNumberProduct] = useState(0);
    const { id } = useParams();

    useEffect(() => {
        axiosInstance.get(`products/detail/${id}`).then((res) => {
            setProductDetail(res.data);
        }).catch(err => console.log(err));
    }, [])

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
                <Link to='/'>Baş sahypa</Link>
                <AiOutlineRight />
                <Link to={`/category/${productDetail?.subcategory.category.id}`}>{productDetail?.subcategory.category.name_tk}</Link>
                <AiOutlineRight />
                <Link to={`/subcategory/${productDetail?.subcategory.id}`}>{productDetail?.subcategory.name_tk}</Link>
            </div>
            <h2 className='product-category-name'>{productDetail?.subcategory.category.name_tk}</h2>
            <div className='product-details'>
                <div className='product-image'>
                    <Carousel autoplay draggable arrows={true} {...settings} >
                        {productDetail?.product_images.map((item) => <img className='carusel-img' src={`https://turkmenexpress.com.tm${item.image}`} alt='carousel1' />)}
                    </Carousel>
                </div>
                <div className='product-description'>
                    <h2 className='product-description-product-name'>{productDetail?.name_tk}</h2>
                    <Link className='brand-description'>
                        <img src={`https://turkmenexpress.com.tm${productDetail?.brand?.logo}`} alt='brand' />
                        <p>{productDetail?.brand?.name}</p>
                    </Link>
                    <div className='other-description'>
                        <p>Agramy: {productDetail?.weight} kg</p>
                        <div className='product-description-stock'>
                            {/* <AiFillCheckCircle />
                            <p>Stokda bar</p> */}
                            <p>{productDetail?.short_desc_tk}</p>
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
            <div className='long-decription'>{productDetail?.long_desc_tk}</div>

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