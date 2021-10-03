import React from 'react';
import './Contact.css'
import img from '../../images/student-2.jpg'
const Contact = () => {
    return (
        <div className='container container-box'>
            <div className='covid-alert mt-3'>
                <h3>IMPORTANT COVID-19 ALERT</h3>
                <p>At the English Care Academy, the health and safety of all our visitors, staff, partners, and the communities in which we operate, is our top priority. To aid in minimising the spread of Covid-19, public access to our library, cultural centre, and front of office services in Dhaka,Bogura, Cumilla, Chattogram, Rajshahi and Sylhet is currently suspended. We will inform all our valued stakeholders of any changes as soon as they occur.

                </p>
            </div>
            <div>
                <h1 className='contact-title'>Contact us</h1>
                <p>We are here to answer any query you have about the English Care Academy in Bangladesh. You can call us, send us a message any day in working time.
                    <br />
                    <br />
                    Make a complaint, provide feedback or show appreciation.
                    <br />
                    <br />
                    Our Customer Service team provides information and guidance about the English Care Academy and its programmes and activities. We hope to make your experience of dealing with the English Care Academy an excellent one and we welcome your comments, suggestions and details of satisfaction or dissatisfaction. This could be about the service you have experienced when contacting us, or when using any of our products or services. We would also like to hear from you if a particular member of staff has provided exceptional service.

                </p>
                <br />
                <h3>How to Contact with us</h3>
                <p>You can contact with us to follow some standard way</p>
                <ul>
                    <li>By calling us on + 88 09372353273 (Saturday to Thursday, 08.30 to 18.00)
                    </li>
                    <li>By emailing us at bd.contact@englishcareacademy.org (Subject line: Complaint/Feedback/Appreciation)</li>
                    <br />
                    <img width="100%" height='300px' src={img} alt="kopal" />

                </ul>
            </div>
        </div >
    );
};

export default Contact;