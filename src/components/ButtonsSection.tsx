'use client';

import { CustomButton } from '@/components';
import { useRouter } from 'next/navigation';
import { IoMdArrowBack } from 'react-icons/io';
import { AiFillHeart } from 'react-icons/ai';
import { CardProps } from '@/types';
import { useAddToFavorites } from '@/context/addToFavoritesContext';

const ButtonsSection = ({ item }: { item: CardProps }) => {
  const { handleAddToFavorites } = useAddToFavorites();
  const router = useRouter();

  return (
    <div className='flex gap-4 sm:gap-8 flex-wrap mb-8'>
      <CustomButton
        onClick={() => router.back()}
        type='button'
        text='Wróć'
        extraStyles='text-sm md:text-base px-4 py-[5px] sm:py-[10px]'
        reverse
        isLight
        icon={<IoMdArrowBack className='text-lg' />}
      />
      <CustomButton
        type='button'
        onClick={() => handleAddToFavorites(item)}
        text='Dodaj do ulubionych'
        extraStyles='text-sm md:text-base px-4 py-[5px] sm:py-[10px]'
        isLight
        icon={<AiFillHeart className='text-lg' />}
      />
    </div>
  );
};

export default ButtonsSection;
