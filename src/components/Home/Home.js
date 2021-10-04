import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Service from '../Service/Service';
import slider1 from '../../images/student-1.jpg'
import slider2 from '../../images/student-4.jpeg'
import slider3 from '../../images/student-3.jpg'
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

        <>
            <div className='home-container mt-4 mb-4'>
                <div className="home-container-textBox">
                    <h2>English Care Academy</h2>
                    <p>English is the language of our international communication in all areas, such as politics, science, media or art and it is often the language of entertainment as well as socialising. Having a good command of English helps us to have more opportunities in life, first of all, our career.

                        <br />
                        English Care academy always with to develop your English Skills and know the World.
                    </p>
                </div>
                <div className="home-container-slider">
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                width="100%" height="400px"
                                className="d-block"
                                src={slider1}
                                alt="First slide"

                            />
                            <Carousel.Caption>
                                <h2>What is Learning Method?</h2>
                                <p>Learning is like a Circle. We are surrounding to the it</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                width="100%" height="400px"
                                className="d-block"
                                src={slider2}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h2>Communication is a Power</h2>
                                <p>Communication skill is a strong power nowadays. We are providing authentic skills which will make stronger. </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                width="100%" height="400px"
                                className="d-block "
                                src={slider3}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h2>Active Seven Day in a week</h2>
                                <p>English Care Academy stay with you untill the end time of your learning period.We guide your for better output.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>


            <div className='serviceDiv mt-5'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>


        </>
    );
};

export default Home;