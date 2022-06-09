import React from "react";
import iphones from '../../images/iphones.png'

const HeaderSlider = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="background-image flex flex-col-reverse justify-between md:flex-row items-center  pt-5 md:pb-20 mb-16 text-center md:text-left">
        <div>
          <h1 className="text-5xl font-bold">Buy & Sell</h1>
          <h1 className="text-5xl font-bold my-4 mb-8">What's Now & Next</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorescorrupti, dolore enim, fugiat</p>
        </div>
        <div>
          <img src={iphones} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderSlider;
