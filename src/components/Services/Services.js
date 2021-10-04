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
            <h2>Services</h2>
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