import React from 'react'
import '../css/background.css'
import SmartWatchCategory from './category-components/SmartWatchCategory'
import AccessoryCategory from './category-components/AccessoryCategory'
import PhoneCategory from "./category-components/PhoneCategory";

const Categories = () => {
  return (
    <div className='md:flex justify-between'>
        <PhoneCategory/>
        <div className='md:w-6/12 md:h-3/6 md:mt-0 mt-6 rounded-lg'>
          <SmartWatchCategory/>
          <AccessoryCategory/>
        </div>
    </div>
  )
}

export default Categories