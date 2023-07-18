'use client';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { CardProps } from '@/types';
// import { trimText } from '@/utils';
import { formatFullDate } from '@/utils';

const Card = async ({ item }: { item: CardProps }) => {
  const { title, location, _id, images, createdAt } = item;

  const cardImage = images.length
    ? String(images[0].fileUrl)
    : '/landWhite.png';

  return (
    <Link href={`/ogloszenia/${_id}`}>
      <div className='bg-white rounded-md transition cursor-pointer h-[440px] flex flex-col gap-4 p-4 group shadow hover:shadow-label'>
        <div className='relative w-full h-[200px] flex'>
          <Image
            src={cardImage}
            alt={`${title} - ${location}`}
            fill={true}
            className='object-cover group-hover:opacity-80 transition-opacity'
          />
        </div>
        <div className='flex flex-col justify-between flex-1'>
          <div>
            <h2 className='mb-2 text-xl font-bold'>{title}</h2>
            {/* <p className='mb-3'>{trimText(desc, 150)}</p> */}
          </div>
          <div className='flex justify-between items-center mt-auto'>
            <div className='text-sm flex flex-col opacity-70'>
              <span>Lokalizacja: {location}</span>
              <span>Dodano: {formatFullDate(createdAt)}</span>
            </div>
            <Tippy content='Usuń z polubionych'>
              <button
                type='button'
                aria-label='add to favorites'
                onClick={(e) => {
                  e.preventDefault();
                  // add to favorites list later
                }}
                className='text-4xl text-darkColor hover:text-lightGreen self-end transition'
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
