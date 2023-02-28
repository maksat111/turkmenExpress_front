import React from 'react'
import { Carousel } from 'antd';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import './Carusel.css';
import carousel1 from '../images/carousel1.webp';
import carousel2 from '../images/carousel2.webp';

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
    return (
        <Carousel autoplay draggable arrows={true} {...settings} >
            <img className='carusel-img' src={carousel1} alt='carousel1' />
            <img className='carusel-img' src={carousel2} alt='carousel1' />
            <img className='carusel-img' src={carousel1} alt='carousel1' />
            <img className='carusel-img' src={carousel2} alt='carousel1' />
        </Carousel>
    )
}

export default Carusel;