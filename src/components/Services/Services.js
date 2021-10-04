import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Work from '../Work/Work';
import './Services.css'

const Services = () => {
    const [works, setWorks] = useState([]);
    useEffect(() => {
        fetch('./serviceMenu.json')
            .then(res => res.json())
            .then(data => setWorks(data))
    }, [])

    return (
        <div>
            <div className='work-header mt-5 mb-4'>
                <h1>Our Services</h1>
                <p className='text-center'>We believe that a single person can make him special one by taking special services in his learning period and we are committed to serve our all services to them who are really interested know the world with great potency, with great learning stytem.</p>
            </div>
            <div className='singleWorkDesign'>
                {
                    works.map(work => <Work
                        key={work.id}
                        work={work}
                    ></Work>)
                }
            </div>
        </div>
    );
};

export default Services;