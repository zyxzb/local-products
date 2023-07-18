'use client';

import { signOut } from 'next-auth/react';
import CustomButton from './CustomButton';

const UserInfo = () => {
  return (
    <div>
      {/* more user info here */}
      <CustomButton text='Wyloguj' type='button' onClick={() => signOut()} />
    </div>
  );
};

export default UserInfo;
