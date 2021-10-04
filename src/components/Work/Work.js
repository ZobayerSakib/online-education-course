import React from 'react';
import './Work.css'
const Work = (props) => {
    const { image, serviceName, fee } = props.work;
    return (
        <div className='workDivDesign'>
            <div>
                <img width="100px" height="100px" className="img-style" src={image} alt="working" />
            </div>
            <div className="work-info">
                <h4>{serviceName}</h4>
                <h5>Course fee : {fee}</h5>

            </div>
        </div>
    );
};

export default Work;