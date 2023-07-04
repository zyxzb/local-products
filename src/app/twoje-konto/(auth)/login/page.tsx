'use client';

import { Loader, LoginForm, PageTitle, RegisterForm } from '@/components';
import PageWrapper from '@/components/PageWrapper';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session?.status === 'loading') {
    return <Loader />;
  }

  if (session?.status === 'authenticated') {
    return router.push('/twoje-konto');
  }

  return (
    <PageWrapper>
      <div>
        <PageTitle title='Logowanie / Rejestracja' />
        <div className='grid sm:grid-cols-2 gap-20 w-full'>
          <LoginForm />
          <RegisterForm />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Login;
