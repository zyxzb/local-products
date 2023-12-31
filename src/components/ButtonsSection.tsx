'use client';

import { CustomButton } from '@/components';
import { useRouter } from 'next/navigation';
import { IoMdArrowBack } from 'react-icons/io';
import { AiFillHeart } from 'react-icons/ai';
import useFavorite from '@/hooks/useFavotite';
import { User } from '@prisma/client';

interface ButtonsSectionProps {
  listingId: string;
  currentUser: User | null;
}

const ButtonsSection = ({ listingId, currentUser }: ButtonsSectionProps) => {
  const { hasFavorite, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  });
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
        onClick={toggleFavorite}
        text={hasFavorite ? 'Usuń z usubionych' : 'Dodaj do ulubionych'}
        extraStyles='text-sm md:text-base px-4 py-[5px] sm:py-[10px]'
        isLight
        icon={<AiFillHeart className='text-lg' />}
      />
    </div>
  );
};

export default ButtonsSection;
