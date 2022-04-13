import React from 'react';
import seelping from '../../../images/404.jpg'

const NotFound = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center text-primary'>
            <h2>Mechanic is Sleeping...</h2>
            <img className='w-75' src={seelping} alt="" />
        </div>
    );
};

export default NotFound;