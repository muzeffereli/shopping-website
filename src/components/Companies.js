import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper';
import 'swiper/css';
import toshiba from '../images/toshiba.png'
import philips from '../images/philips.png'
import hp from '../images/hp.png'
import electrolux from '../images/electrolux.png'
import gorenje from '../images/gorenje.png'
import bosch from '../images/bosch.png'

const Companies = () => {

  let company = [toshiba, philips, hp, electrolux, gorenje, bosch, bosch, bosch]
  return (
    <>
    <div className='w-full bg-neutral-100 flex justify-center items-center md:mt-24 hidden md:block'>
      <div className='companies container px-4  pl-20 w-full m-auto md:pt-16 pb-20'>
        <Swiper
          effect="fade"
          spaceBetween={0}
          slidesPerView={6}
          modules={[Pagination]}
          pagination={{
              clickable: true
          }}
          className="center"
          >
          {company.map((logo, index) => {
            return <SwiperSlide key={index}><img src={logo} className="bg-white rounded-md px-4 p-1" alt="" /></SwiperSlide>
          })}

        </Swiper>
      </div>
    </div>
    </>
  )
}

export default Companies