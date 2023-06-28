'use client';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Card = () => {
  return (
    <div className='bg-white border border-gray-200 rounded-sm shadow hover:shadow-2xl transition cursor-pointer'>
      <div className='relative w-full h-[200px] flex'>
        <Image
          src='/landWhite.png'
          alt='card img'
          fill={true}
          className='rounded-t-lg object-cover'
        />
      </div>
      <div className='p-5'>
        <h2 className='mb-2 text-2xl font-bold'>
          Noteworthy technology acquisitions 2021
        </h2>
        <p className='mb-3'>
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className='flex justify-between items-center'>
          <Link
            href='#'
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
