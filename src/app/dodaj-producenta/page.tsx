'use client';

import {
  Loader,
  PageTitle,
  CustomLink,
  ImageUploaderSection,
  CreateAdForm,
} from '@/components';
import { useSession } from 'next-auth/react';
import { AiOutlineLogin } from 'react-icons/ai';
import dynamic from 'next/dynamic';

const SelectLocationSection = dynamic(
  () => import('@/components/SelectLocationSection'),
  { ssr: false },
);

const AddProducer = () => {
  const session = useSession();

  if (session?.status === 'loading') {
    return <Loader />;
  }

  if (session?.status === 'unauthenticated') {
    return (
      <>
        <PageTitle title='Dodaj Producenta' />
        <div className='text-center'>
          <h2 className='md:text-lg mb-4 md:mb-8'>
            Zaloguj się aby dodać producenta
          </h2>
          <CustomLink
            link='/twoje-konto/login'
            text='Przejdź do logowania'
            extraStyles='max-w-max mx-auto'
            icon={<AiOutlineLogin className='text-2xl' />}
          />
        </div>
      </>
    );
  }

  return (
    <>
      <PageTitle title='Dodaj Producenta' />
      <ImageUploaderSection />
      <SelectLocationSection />
      <CreateAdForm />
    </>
  );
};

export default AddProducer;
