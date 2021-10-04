import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import img from '../../images/404-page.jpg'
const NotFound = () => {
    return (
        <div className='error-page-div'>
            <img height="300px" src={img} alt="" />
            <p>Opps! The page you requested does not exist.Please input authentic address. Thanks.</p>
            <Link to='/home'>Go back</Link>
        </div>
    );
};

export default NotFound;