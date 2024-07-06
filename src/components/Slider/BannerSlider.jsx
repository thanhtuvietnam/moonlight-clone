import React from 'react';
import { Skeleton } from '../Common';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay } from 'swiper/modules';

export const BannerSlider = ({ films, dataDetail, isLoadingBanner }) => {
  return (
    <div className='mt-6 relative h-0 md:pb-[45%] pb-[55%] tw-banner-slider'>
      {isLoadingBanner ? (
        <Skeleton className='absolute top-0 left-0 w-full h-full !rounded-lg' />
      ) : (
        <Swiper 
          modules={[Navigation,Autoplay]}
          navigation
          autoplay={{delay:2000, disableOnInteraction:false}}
          className='!absolute !top-0 !left-0 !w-full !h-full !rounded-lg flex'
          loop={true}
          slidesPerView={1}
          >
          <SwiperSlide>
            <img src='https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/26/1233821/Giai-Nhat--Dem-Sai-G.jpg' alt='pic1' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/26/1233821/Giai-Nhi---Dem-Ngan-.jpg' alt='pic2' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/26/1233821/Giai-3---Tet-Gao-Moi.jpg' alt='pic3' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/26/1233821/Nhieu-Share---Ta-Pa-.jpg' alt='pic4' />
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
};
