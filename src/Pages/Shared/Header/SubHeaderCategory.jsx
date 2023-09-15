import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faCoffee, faFontAwesome, faI, faIcons } from '@fortawesome/free-solid-svg-icons'

const SubHeaderCategory = ({ items }) => {
    const { id, name, img, urlPath } = items;

    return (
        <div className='cursor-pointer flex flex-col justify-center items-center text-slate-700' onClick={handleLoadIcons}>
            <div className='p-4'>
                {
                    name === 'Classic' ? (<FontAwesomeIcon icon={faIcons} size="2x" />) : name === 'Sharp' ? (<FontAwesomeIcon icon={faIcons} size='2x' />) : name === 'Brands' ? (<FontAwesomeIcon icon={faFontAwesome} size='2x' />) : (<FontAwesomeIcon icon={faBolt} size='2x' />)
                }
            </div>
            <div className='mx-auto'>
                <small className='text-[13px] text-center'>{name}</small>
            </div>
        </div>
    );
};

export default SubHeaderCategory;