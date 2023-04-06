import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'

export default function Portfolio () {
  return (
      <div className='portfolio'>
          <span>Recent Projects</span>
          <span>Portfolio</span>

            <Swiper>
                <SwiperSlide>
                    <img src="" alt="" />
                </SwiperSlide>
            </Swiper>
      </div>
  )
}
