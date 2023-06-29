'use client';

import { Button } from '@/components';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session?.status === 'loading') {
    return <p>Loading...</p>;
  }

  if (session?.status === 'authenticated') {
    return router.push('/twoje-konto');
  }

  return (
    <div>
      <Button
        text='Login (Google)'
        type='button'
        onClick={() => signIn('google')}
      />
    </div>
  );
};

export default Login;
