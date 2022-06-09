import React from 'react'
import { BiCube } from "react-icons/bi"
import { CgCreditCard } from "react-icons/cg"
import { FaAward } from "react-icons/fa"

 
const DeliveryGuaranty = () => {
  return (
    <div className='md:flex flex-wrap gap-3 justify-between text-center md:mt-28 mt-14'>
        <div className='flex flex-col items-center justify-end'>
            <BiCube className='text-7xl font-light text-green-600' />
            <p className='font-semibold md:my-5 my-4'>Çatdırılma</p>
            <p className='w-72'>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
        </div>
        <div className='flex flex-col items-center mt-10 md:mt-0'>
            <CgCreditCard className='text-7xl font-light text-green-600' />
            <p className='font-semibold md:my-5 my-4'>Kredit</p>
            <p className='w-72'>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
        </div>
        <div className='flex flex-col items-center mt-10 md:mt-0'>
            <FaAward className='text-7xl font-light text-green-600' />
            <p className='font-semibold md:my-5 my-4'>Zəmanət</p>
            <p className='w-72'>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
        </div>
    </div>
  )
}

export default DeliveryGuaranty