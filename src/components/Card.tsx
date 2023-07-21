'use client';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { CardProps } from '@/types';
import { formatFullDate } from '@/utils/helpers';

const Card = async ({ item }: { item: CardProps }) => {
  const { title, location, _id, images, createdAt } = item;

  const cardImage = images.length
    ? String(images[0].fileUrl)
    : '/landWhite.png';

  return (
    <Link href={`/ogloszenia/${_id}`}>
      <div className='bg-white rounded-md transition cursor-pointer h-[280px] sm:h-[360px] flex flex-col gap-4 p-3 group shadow hover:shadow-label'>
        <div className='relative w-full h-[65%]'>
          <Image
            src={cardImage}
            alt={`${title} - ${location}`}
            fill={true}
            className='object-cover group-hover:opacity-80 transition-opacity'
          />
        </div>
        <div className='flex flex-col justify-between h-[35%]'>
          <div>
            <h2 className='mb-2 text-md sm:text-lg line-clamp-2 '>
              <strong className='font-normal'>{title}</strong>
            </h2>
          </div>
          <div className='flex justify-between gap-4 items-center mt-auto'>
            <div className='text-xs flex flex-col opacity-70'>
              <span className='line-clamp-1'>{location}</span>
              <span className='line-clamp-1'>{formatFullDate(createdAt)}</span>
            </div>
            <Tippy content='Usuń z polubionych'>
              <button
                type='button'
                aria-label='add to favorites'
                onClick={(e) => {
                  e.preventDefault();
                  // add to favorites list later
                }}
                className='text-3xl text-darkColor hover:text-lightGreen self-end transition'
              >
                <AiFillHeart />
              </button>
            </Tippy>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
