'use client';

import { CardProps } from '@/types';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md';
import 'swiper/css';

const NewAds = ({ data }: { data: CardProps[] }) => {
  return (
    <div className='mb-10'>
      <h2 className='text-xl mb-10'>Ostatnio dodane ogłoszenia</h2>
      <div className='flex'>
        <button
          className='swiper-button-prev !text-darkColor md:text-2xl flex justify-center items-center px-2 md:px-4'
          type='button'
          aria-label='previous image'
        >
          <MdArrowBackIosNew />
        </button>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop
          speed={1000}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 2,
            },
            950: {
              slidesPerView: 3,
            },
          }}
        >
          {data.map((item: CardProps) => {
            return (
              <SwiperSlide key={item._id}>
                <Card item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          className='swiper-button-next !text-darkColor md:text-2xl flex justify-center items-center px-2 md:px-4'
          type='button'
          aria-label='next image'
        >
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default NewAds;
