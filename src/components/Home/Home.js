import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Service from '../Service/Service';
import './Home.css'
const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./homeServices.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    // const services = [
    //     { serviceName: 'Basic English', fee: 3500, image: 'https://images04.military.com/sites/default/files/2021-04/stock-college-student-18.jpg' },
    //     { serviceName: 'Vocabulary Special', fee: 2500, image: 'https://www.swedishmatch.com/globalassets/42721/scaled/1204x798x100x1197x798x3_0/globalassets-swmimages-career-2018_employeestudent.jpg?width=960.75' },
    //     { serviceName: 'Reading Guide', fee: 1500, image: 'https://www.commonsense.org/education/sites/default/files/styles/16_9_medium/public/blog-share/7-ways-to-make-distance-learning-more-equitable-article.png?itok=ki1Ssfnc' },
    //     { serviceName: 'BCS English Fundamental', fee: 3000, image: 'https://lindastade.com/wp-content/uploads/2019/03/shutterstock_102482084-e1552480105382.jpg' }
    // ]

    return (

        <div>
            <h2>This is Home</h2>

            <div className='serviceDiv'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>


        </div>
    );
};

export default Home;