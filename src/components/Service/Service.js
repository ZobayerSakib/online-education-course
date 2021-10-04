import React from 'react';
import './Service.css'
const Service = (props) => {
    const { image, serviceName, fee } = props.service;
    return (
        <div className='container ' >
            <img width="250px" height="200px" className='img-controller' src={image} alt="" />
            <div className='mt-3 mb-3'>
                <h5>{serviceName}</h5>
                <h6>Course Fee:{fee}</h6>
            </div>
        </div>

    );
};

export default Service;