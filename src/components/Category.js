import React from 'react';
import { Outlet } from 'react-router-dom';

function Category() {
    return (
        <div className='category-container'>
            Category
            <Outlet />
        </div>
    );
}

export default Category;