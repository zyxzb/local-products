'use client';

import { signOut } from 'next-auth/react';
import { CustomLink, CustomButton } from '@/components';

const UserInfo = () => {
  return (
    <div className='flex gap-10 flex-wrap'>
      <CustomButton text='Wyloguj' type='button' onClick={() => signOut()} />
      <CustomLink text='Dodaj kolejne' link='/dodaj-producenta' />
    </div>
  );
};

export default UserInfo;
