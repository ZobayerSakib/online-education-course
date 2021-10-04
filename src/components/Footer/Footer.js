import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className='footerStyle mt-4'>
            <div className='footer-about'>
                <h5>About us</h5>
                <p>We are alone without students support.Our students are our power. We are always active to work for them. It is our commitment.</p>
            </div>
            <div className='footer-partner'>
                <h5>Partner with us</h5>
                <a href="/fake">Our work in Development</a>
                <br />
                <a href="/fake">Trust, Foundations with Students Team</a>
                <br />
                <a href="/fake">Honest Policy</a>
                <br />
                <a href="/fake">IELTS Partnership Programme</a>
            </div>
            <div className='footer-teach'>
                <h5>Teach English</h5>
                <p>Knowing English increases your chances of getting a good job in a multinational company within your home country or for finding work abroad. </p>
                <br />
                <a href="/empty">Apps for Students</a>
                <br />
                <a href="/empty">Online teaching resourse</a>
                <br />
                <a href="/empty">English Care Academy Free courses</a>
            </div>
            <div className='footer-contact'>
                <h5>Contact Us</h5>

                <h6>Helpline: 013725-383752</h6>
                <p><small>(accessible from any Robi, GP, Banglalink, Teletalk, Airtel and BTCL Number)
                </small></p>
                <h6>Email:</h6>
                <p><small>suppot.englishcare@academy.com</small></p>
            </div>
        </div>
    );
};

export default Footer;