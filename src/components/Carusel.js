import { React, useState, useEffect } from 'react'
import { Carousel } from 'antd';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { axiosInstance } from '../config/axios';
import './Carusel.css';

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



const Carusel = () => {
    const [bannerList, setBannerList] = useState([]);
    useEffect(() => {
        axiosInstance.get('library/banners/list/').then(res => {
            setBannerList(res.data);
        }).catch(err => console.log(err));
    }, [])
    return (
        <Carousel autoplay draggable arrows={true} {...settings} >
            {bannerList?.map(item => <img className='carusel-img' src={item.image} key={item.id} alt='carousel1' />)}
        </Carousel>
    )
}

export default Carusel;