import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Service from '../Service/Service';
import slider1 from '../../images/student-1.jpg'
import slider2 from '../../images/student-2.jpg'
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
                    <h2>Faka Jayga Kaj Ase</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias libero sequi eveniet pariatur quisquam voluptatem maiores. Sint voluptatibus quo nobis sit nesciunt id eum aliquid aspernatur natus? Veniam optio repellendus vitae quidem vero eos tempora itaque alias ab temporibus unde at, aspernatur doloremque quam eligendi perspiciatis! Temporibus itaque sed nisi quasi illum quas exercitationem ipsum, nemo inventore quos id optio dolor numquam a suscipit aspernatur earum mollitia. Dolore ab voluptate repudiandae provident dignissimos sapiente, recusandae dolor minima nihil quos nam reiciendis vero est excepturi beatae nulla similique reprehenderit aperiam unde eveniet necessitatibus quas eligendi. Ab aliquam molestias fugiat ullam quidem tenetur, debitis totam aperiam, optio hic ratione, adipisci omnis asperiores. Dicta, sapiente delectus. Cupiditate, iusto itaque dolorum molestias deleniti nesciunt sapiente distinctio, ipsa, iste recusandae facilis eaque id laudantium quod soluta consectetur. Soluta quasi ipsam, atque dolorem repudiandae distinctio consectetur saepe incidunt sint quidem ea at cumque veniam perferendis culpa.</p>
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
                                <h3>What is Learning Method?</h3>
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
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>



            <div className='serviceDiv'>
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