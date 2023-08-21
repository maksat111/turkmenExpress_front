import React, { useEffect, useState, } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { AiOutlineRight, AiOutlineLeft, AiOutlineLoading } from 'react-icons/ai';
import '../product/ProductDetails.css';
import './ProductsCategory.css';
import Card from '../../components/Card';
import { axiosInstance } from '../../config/axios';
import down from '../../images/down.svg';
import '../home/Home.css';
function ProductsCategory() {
    const { id } = useParams();
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [state, setState] = useState(null);
    const [nextPage, setNextPage] = useState(2);
    const [nextData, setNextData] = useState([]);
    const [nextLoading, setNextLoading] = useState(false);

    // useEffect(() => {
    //     const categories = JSON.parse(localStorage.getItem('turkmenExpress-categories'));
    //     const foundedCategory = categories[0].categories.find(item => item.id == id);
    //     setState(foundedCategory);
    // }, [id])

    useEffect(() => {
        axiosInstance.get(`products/category/${id}/list/`).then((res) => {
            setCategoryProducts(res.data.results);
            if (res.data.next == null) {
                setNextPage(null)
            }
            const categories = JSON.parse(localStorage.getItem('turkmenExpress-categories'));
            const foundedCategory = categories[0].categories.find(item => item?.id == id);
            setState(foundedCategory);
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

    const handleContinue = async () => {
        try {
            setNextLoading(true);
            const data = await axiosInstance.get(`products/category/${id}/list/?page=${nextPage}`);
            setCategoryProducts([...categoryProducts, ...data.data.results]);
            if (data.data.next) {
                setNextPage(nextPage + 1);
            } else {
                setNextPage(null)
            }
            setNextLoading(false);
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div className='category-products-container'>
            <div className='breadcrump'>
                <Link to='/'>Baş sahypa</Link>
                <AiOutlineRight />
                <Link>{state?.name_tk}</Link>
                {/* <AiOutlineRight />
                <Link to='/home/product'>Azyk harytlary</Link> */}
            </div>
            <h2 className='product-category-name'>{state?.name_tk}</h2>
            <div className='subcategory-container'>
                {state?.subcategories?.map(item =>
                    <Link to={`/subcategory/${item.id}`} className='subcategory'>
                        <img src={`https://turkmenexpress.com.tm/media/${item.image}`} />
                        {item.name_tk}
                    </Link>
                )}

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
                    {categoryProducts?.map(product => <Card
                        key={product.id}
                        id={product.id}
                        image={product.main_image}
                        product_name={product.name_tk}
                        product_price={product.price}
                    />)}
                </div>
                <div className='button-container'>
                    {nextPage && <div className='continue-button' onClick={handleContinue}>
                        {nextLoading ? <AiOutlineLoading className='loading-icon' /> : <p>Dowamy</p>}
                    </div>}
                </div>
            </div>
        </div >
    );
}

export default ProductsCategory;