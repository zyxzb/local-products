'use client';

import ScrollContainer from 'react-indiana-drag-scroll';

import { categories } from '@/data/categories';
import Image from 'next/image';

interface MapListCategoriesInterface {
  handleSelectCategory?: (category: string) => void;
}

const MapListCategories = ({
  handleSelectCategory,
}: MapListCategoriesInterface) => {
  return (
    <ScrollContainer
      hideScrollbars={false}
      className='w-full h-[15%] bg-whiteColor flex gap-3 sm:gap-5 items-center overflow-x-auto scrollbar-thumb-lightGreen scrollbar-track-whiteColor scrollbar-thin '
    >
      {categories.map((category) => (
        <button
          key={category.label}
          aria-label={category.label}
          type='button'
          className='flex flex-col items-center justify-center gap-1 group h-full p-2 cursor-pointer'
          onClick={() =>
            handleSelectCategory && handleSelectCategory(category.link)
          }
        >
          <div className='relative h-[45px] w-[60px]'>
            <Image
              src={category.icon}
              alt={category.label}
              fill={true}
              className='w-full h-full object-contain'
            />
          </div>
          <p className='group-hover:underline text-xs text-center text-darkColor'>
            {category.label}
          </p>
        </button>
      ))}
    </ScrollContainer>
  );
};

export default MapListCategories;
