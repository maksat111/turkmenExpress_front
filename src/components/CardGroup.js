import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import Card from './Card';
import './CardGroup.css';

function CardGroup({ groupName }) {
    return (
        <div className='card-group-container'>
            <div className='group-name-container'>
                <p className='group-name'>{groupName}</p>
                <div className='group-show-all'>
                    <p>Ählisi</p>
                    <AiOutlineRight />
                </div>
            </div>
            <div className='group-card-container'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default CardGroup;