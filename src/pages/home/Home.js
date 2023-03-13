import { React, useState } from 'react';
import { AiOutlineArrowDown, AiOutlineDown, AiOutlineLoading } from 'react-icons/ai';
import Card from '../../components/Card';
import CardGroup from '../../components/CardGroup';
import Carusel from '../../components/Carusel';
import { axiosInstance } from '../../config/axios';
import banner from '../../images/banner.webp';
import down from '../../images/down.svg';
import './Home.css';

function Home() {
    const [nextPage, setNextPage] = useState(2);
    const [nextData, setNextData] = useState([]);
    const [nextLoading, setNextLoading] = useState(false);

    const handleContinue = async () => {
        try {
            setNextLoading(true);
            const data = await axiosInstance.get(`products/mainpage/list/?page=${nextPage}`);
            setNextData(data.data.results);
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
        <div className='home-container'>
            <div className='banner-container'>
                <Carusel />
            </div>
            <CardGroup nextData={nextData} />
            <div className='button-container'>
                {nextPage && <div className='continue-button' onClick={handleContinue}>
                    {nextLoading ? <AiOutlineLoading className='loading-icon' /> : <><p>Dowamy</p><img src={down} alt='down' /></>}
                </div>}
            </div>
        </div>
    );
}

export default Home;