import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { FilmItem } from '../Common'
import { Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation'
import  Skeleton  from '../Common/Skeleton'



const SectionSlider = ({films}) => {
  return (
    <div className='relative'>
      <Swiper
        modules={[Navigation]}
        navigation ={true}
        slidesPerView='auto'
        slidesPerGroupAuto
        spaceBetween={30}
        loop={true}
        className='md:!w-[calc(100vw_-_260px_-_310px_-_2px_-_4vw_-_10px)] !w-[calc(100vw-8vw-2px)] tw-section-slider !py-2'
      >
         {films?.map((film) => (
          <SwiperSlide key={film.id} className="!w-[175px]">
            <FilmItem item={film} />
          </SwiperSlide>
        ))}
        {(!films || films.length === 0) && (
          <>
            {new Array(Math.ceil(window.innerWidth/200))
              .fill('')
              .map((_,index)=>(
                <SwiperSlide key={index} className='!w-[175px]'>
                  <Skeleton/>
                </SwiperSlide>
              ))
            }
          </>
        )}
        {films && (
          <>
            <div className='absolute top-[2%] left-0 w-full h-[83%] z-10 pointer-events-none tw-black-backdrop-2'></div>
            <div className='absolute top-0 left-0 w-[4%] h-full z-10'></div>
            <div className='absolute top-0 right-0 w-[4%]h-full z-10'></div>
          </>
        )}
        
        
      </Swiper>
    </div>
  )
}

export default SectionSlider;