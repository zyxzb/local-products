'use client';

import { signOut } from 'next-auth/react';
import { CustomLink, CustomButton } from '@/components';
import { Listing } from '@prisma/client';

interface UserButtonsProps {
  data: Listing[];
}

const UserButtons = ({ data }: UserButtonsProps) => {
  const text = data.length > 0 ? 'Dodaj kolejne' : 'Dodaj pierwsze ogłoszenie';

  return (
    <div className='flex gap-5 md:gap-10 flex-wrap mb-10 md:mb-20'>
      <CustomButton text='Wyloguj' type='button' onClick={() => signOut()} />
      <CustomLink text={text} link='/dodaj-producenta' />
    </div>
  );
};

export default UserButtons;
