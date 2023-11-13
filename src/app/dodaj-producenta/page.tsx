import {
  PageTitle,
  CustomLink,
  CreateAdForm,
  ImageUpload,
  FormSectionWrapper,
  FormCategories,
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
        <PageTitle
          title='Zaloguj sie aby dodać ogłoszenie'
          subtitle='Zachęcamy do rejestracji i logowania się w naszej aplikacji, dzięki temu będziesz mógł łatwo dodawać ogłoszenia.'
        />
        <div className='text-center'>
          <CustomLink
            link='/twoje-konto'
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
      <PageTitle
        title='Dodaj Producenta'
        subtitle='Dodaj siebie lub producenta żwyności, którego znasz.'
      />
      <section>
        <FormSectionWrapper text='1. Dodaj zdjęcia'>
          <ImageUpload />
        </FormSectionWrapper>
        <FormSectionWrapper text='2. Wybierz lokalizację'>
          <GeocoderControl />
        </FormSectionWrapper>
        <FormSectionWrapper text='3. Wybierz pasujące kategorie'>
          <FormCategories />
        </FormSectionWrapper>
        <CreateAdForm />
      </section>
    </>
  );
};

export default AddProducer;
