import React from 'react';

const Service = (props) => {
    const { image, serviceName, fee } = props.service;
    return (
        <div className='container' >
            <img width="250px" height="200px" src={image} alt="" />
            <div className='mt-3 mb-3'>
                <h4>{serviceName}</h4>
                <h5>Course Fee:{fee}</h5>
            </div>
        </div>
    );
};

export default Service;