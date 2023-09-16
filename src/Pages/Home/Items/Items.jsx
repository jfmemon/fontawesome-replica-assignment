import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Icons from './Icons';

const Items = () => {
    const location = useLocation();
    const items = location?.state?.item;

    if (!items || !Array.isArray(items)) {
        return <div>No items to display</div>;
    }

    return (
        <div className='pb-10'>
            <p className='mt-5 text-xl font-bold pl-1'>{items.length} Icons</p>
            <div className='md:flex gap-3 md:flex-wrap grid grid-cols-2 mt-5'>
                {items.map((item) => (
                    <Icons key={item.id} item={item}></Icons>
                ))}
            </div>
        </div>
    );
};

export default Items;