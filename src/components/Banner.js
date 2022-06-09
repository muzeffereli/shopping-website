import React from 'react';
import Iphone11 from '../images/iphone11banner.png';
import AirTag from '../images/airtagbanner.png';

const Banner = () => {
    return (
        <div className="md:flex flex-wrap justify-between my-4 container">
            <img className="mx-auto" src={Iphone11} alt=""/>
            <img className="mx-auto" src={AirTag} alt=""/>
        </div>
    );
};

export default Banner;