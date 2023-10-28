import {
  PageTitle,
  CustomLink,
  CreateAdForm,
  ImageUpload,
  FormSectionWrapper,
} from '@/components';

import { AiOutlineLogin } from 'react-icons/ai';
import dynamic from 'next/dynamic';
import getCurrentUser from '@/actions/getCurrentUser';

const GeocoderControl = dynamic(() => import('@/components/GeocoderControl '), {
  ssr: false,
});

const AddProducer = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
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
      <section>
        <FormSectionWrapper text='1. Dodaj zdjęcia'>
          <ImageUpload />
        </FormSectionWrapper>
        <FormSectionWrapper text='2. Wybierz lokalizację'>
          <GeocoderControl />
        </FormSectionWrapper>
        <CreateAdForm />
      </section>
    </>
  );
};

export default AddProducer;
