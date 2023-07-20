'use client';

import {
  Loader,
  PageTitle,
  CustomLink,
  PageWrapper,
  ImageUploader,
  CreateAdForm,
} from '@/components';
import { useSession } from 'next-auth/react';
import { AiOutlineLogin } from 'react-icons/ai';

const AddProducer = async () => {
  const session = useSession();

  if (session?.status === 'loading') {
    return <Loader />;
  }

  if (session?.status === 'unauthenticated') {
    return (
      <PageWrapper>
        <PageTitle title='Dodaj Producenta' />
        <div className='flex flex-col gap-8 justify-center items-center text-center'>
          <h2 className='text-xl'>Zaloguj się aby dodać producenta</h2>
          <CustomLink
            link='/twoje-konto/login'
            text='Przejdź do logowania'
            icon={<AiOutlineLogin className='text-2xl' />}
          />
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <PageTitle title='Dodaj Producenta' />
      <ImageUploader />
      <CreateAdForm />
    </PageWrapper>
  );
};

export default AddProducer;
