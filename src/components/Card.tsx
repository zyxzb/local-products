'use client';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { CardProps } from '@/types';
import { trimText } from '@/utils';

const Card = (item: CardProps) => {
  const { title, desc, location, _id, imagesUrl } = item;
  const cardImage = imagesUrl.length && imagesUrl[1];

  return (
    <div className='bg-white border border-gray-200 rounded-sm shadow hover:shadow-2xl transition cursor-pointer h-[440px] flex flex-col'>
      <div className='relative w-full h-[200px] flex'>
        <Image
          src={cardImage || '/landWhite.png'}
          alt={`${title} - ${location}`}
          fill={true}
          className='ro object-cover'
        />
      </div>
      <div className='p-5 flex flex-col justify-between flex-1'>
        <div>
          <h2 className='mb-2 text-2xl font-bold'>{title}</h2>
          <p className='mb-3'>{trimText(desc, 150)}</p>
        </div>
        <div className='flex justify-between items-center mt-auto'>
          <Link
            href={`/ogloszenia/${_id}`}
            className='w-[100px] items-center px-3 py-2 text-sm font-medium text-center text-white bg-darkColor hover:bg-lightGreen z-10'
          >
            Otwórz
          </Link>
          <Tippy content='Usuń z polubionych'>
            <button
              type='button'
              className=' text-4xl text-darkColor hover:text-lightGreen'
            >
              <AiFillHeart />
            </button>
          </Tippy>
        </div>
      </div>
    </div>
  );
};

export default Card;
