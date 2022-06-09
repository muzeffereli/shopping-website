import React from 'react'
import Imagehalf from '../../images/image-half.png'


const AccessoryCategory = () => {
  return (
    <div className='background-half flex justify-between md:mt-2 mt-6 md:max-h-72 rounded-lg'>
        <div className='md:pt-8 pt-5 md:pl-8 pl-5 flex flex-col md:gap-4 gap-3'>
            <h2 className='font-semibold md:text-xl text-sm'>Aksesuar</h2>
            <p className='md:text-base text-sm'>Məhsul sayı: 891</p>
            <p className='font-extrabold text-blue-500 md:text-base text-sm'><a className='font-light' href="">Məhsullara keçid</a>{">"}</p>
        </div>
        <img className='md:pt-16 pt-14 md:pr-8 object-scale-down md:h-68 md:w-96 w-40' src={Imagehalf} alt="" />
    </div>
  )
}

export default AccessoryCategory