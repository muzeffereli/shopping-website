import React from 'react'
import '../../css/background.css'
import ProductClock from '../../images/product-clock.png'


const SmartWatchCategory = () => {
  return (
    <div className='background-half flex justify-between rounded-lg'>
        <div className='md:pt-8 pt-5 md:pl-8 pl-5 flex flex-col md:gap-4 gap-3'>
            <h2 className='font-semibold md:text-xl text-sm'>Smart Saat</h2>
            <p className='md:text-base text-sm'>Məhsul sayı: 46</p>
            <p className='font-extrabold text-blue-500 md:text-base text-sm'><a className='font-light' href="">Məhsullara keçid </a> ></p>
        </div>
        <img className='md:pr-8 object-scale-down md:h-72 md:w-96 w-40 md:pt-14 pt-10 ' src={ProductClock} alt="" />
  </div>
  )
}

export default SmartWatchCategory