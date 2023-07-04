'use client';

import { CustomButton, Loader, PageTitle, PageWrapper } from '@/components';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const Account = () => {
  const session = useSession();
  const router = useRouter();

  if (session?.status === 'loading') {
    return <Loader />;
  }

  if (session?.status === 'unauthenticated') {
    return router.push('/twoje-konto/login');
  }

  return (
    <PageWrapper>
      <div>
        <PageTitle title='Twoje konto' />
        <h2>Witaj, {session.data?.user?.name}</h2>
        <CustomButton text='Wyloguj' type='button' onClick={() => signOut()} />
      </div>
    </PageWrapper>
  );
};

export default Account;
