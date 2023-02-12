import React from 'react';
import logo from '../../images/logo.png';
import android from '../../images/android.svg';
import ios from '../../images/ios.svg';

function Links() {
    return (
        <div className='links-container'>
            <img src={logo} alt='Turkmen Express' />
            <img src={ios} alt='Turkmen Express ios' />
            <img src={android} alt='Turkmen Express android' />
            <div>Скачать АРК</div>
        </div>
    );
}

export default Links;