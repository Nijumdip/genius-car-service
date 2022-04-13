import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { singleServiceId } = useParams();
    return (
        <div>
            <h2>Welcome to Detail : {singleServiceId} </h2>
        </div>
    );
};

export default ServiceDetail;