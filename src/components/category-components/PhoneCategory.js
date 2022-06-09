
import React from 'react'
import '../../css/background.css'
import BackgroundLogo from '../../images/product-logo1.png'


const PhoneCategory = () => {
  return (
    <div className='background-product'>
        <div className='pt-8 pl-8 flex flex-col gap-4'>
            <h2 className='font-semibold md:text-xl text-sm'>Telefon</h2>
            <p className='md:text-base text-sm'>Məhsul sayı: 322</p>
            <p className='font-extrabold text-blue-500 md:text-base text-sm '><a className='font-light' href="">Məhsullara keçid </a> ></p>
        </div>
        <img src={BackgroundLogo} alt="" />
  </div>
  )
}

export default PhoneCategory