import React from 'react';

const Icons = ({ item }) => {
    const { img, name } = item;
    const customFilterStyles = {
        filter: 'invert(15%) sepia(7%) saturate(1635%) hue-rotate(162deg) brightness(98%) contrast(92%)'
    };

    return (
        <div className='bg-white text-slate-700 rounded-lg md:w-32 md:h-32 w-40 h-40 cursor-pointer flex flex-col gap-5 justify-center items-start hover:bg-amber-300'>
            <img className='w-7 h-7 mx-auto' src={img} alt="" style={customFilterStyles} />
            <div className='mx-auto'>
                <span className='text-[11px]'>{name}</span>
            </div>
        </div>
    );
};

export default Icons;