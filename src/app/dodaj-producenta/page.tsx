'use client';

import {
  Loader,
  PageTitle,
  CustomLink,
  PageWrapper,
  InputField,
  CustomButton,
  Popup,
  Gallery,
  AddProducerLabelWrapper,
  ImageUploader,
} from '@/components';
import { Form, Formik, FormikHelpers } from 'formik';
import { useSession } from 'next-auth/react';
import { AiOutlineLogin } from 'react-icons/ai';
import { useState } from 'react';
import { BiMailSend } from 'react-icons/bi';
import { CreateAdProps, Images } from '@/types';
import { adSchema } from '@/utils/validationSchemas';

const initialValues = {
  title: '',
  desc: '',
  location: '',
  content: '',
};

const AddProducer = async () => {
  const [isSending, setIsSending] = useState(false);
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [images, setImages] = useState<Images[]>([]);
  const session = useSession();

  const handleImageUpload = (
    res: Images[] | ((prevState: Images[]) => Images[]),
  ) => {
    if (images.length + res.length > 4) {
      alert('Możesz dodać łacznie tylko 4 zdjęcia!');
    } else {
      setImages((prevState) =>
        typeof res === 'function' ? res(prevState) : [...prevState, ...res],
      );
    }
  };

  const handleCreateAd = async (
    values: CreateAdProps,
    actions: FormikHelpers<CreateAdProps>,
  ) => {
    const { title, desc, location, content } = values;
    // additional protector
    if (images.length > 4) {
      return alert('Możesz dodać łacznie tylko 4 zdjęcia!');
    } else {
      setIsSending(true);
      try {
        await fetch('/api/ads', {
          method: 'POST',
          body: JSON.stringify({
            title,
            desc,
            location,
            content,
            username: session?.data?.user?.name,
            email: session?.data?.user?.email,
            images,
          }),
        });
        actions.resetForm();
        setImages([]);
        setIsPopupActive(true);
      } catch (error) {
        alert(`Something went wrong :( \n Error: ${error} \n Try again!`);
      } finally {
        setIsSending(false);
      }
    }
  };

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
      <AddProducerLabelWrapper text='Załaduj zdjecia - pierwsze zostanie zdjęciem głównym. Po załadowaniu zdjęcia zostaną wyświetlone 📸'>
        <Gallery images={images} />
      </AddProducerLabelWrapper>
      <ImageUploader handleImageUpload={handleImageUpload} images={images} />
      <Formik
        initialValues={initialValues}
        onSubmit={handleCreateAd}
        validationSchema={adSchema}
      >
        {() => (
          <Form className='flex flex-col w-full gap-10'>
            <AddProducerLabelWrapper text='Podaj tytuł - im więcej szczegółów, tym lepiej.'>
              <InputField name='title' placeholder='Tytuł...' />
            </AddProducerLabelWrapper>
            <AddProducerLabelWrapper text='Podaj krótki opis - będzie on widoczny na karcie ogłoszenia.'>
              <InputField name='desc' placeholder='Krótki opis...' />
            </AddProducerLabelWrapper>
            <AddProducerLabelWrapper text='Wybierz dostępną lokalizacje.'>
              <InputField name='location' placeholder='Miejscowość...' />
            </AddProducerLabelWrapper>
            <AddProducerLabelWrapper
              text='Wpisz ważne informację - takie które sam chciałbyś zobaczyć w
                ogłoszniu.'
            >
              <InputField
                name='content'
                placeholder='Treść ogłoszenia...'
                extraStyles='h-[200px]'
                isMessage
              />
            </AddProducerLabelWrapper>
            <CustomButton
              type='submit'
              text={isSending ? 'Dodawanie...' : 'Dodaj'}
              icon={<BiMailSend className='text-xl' />}
            />
          </Form>
        )}
      </Formik>
      {isPopupActive && (
        <Popup
          text1='Gratulacje! - Ogłoszenie zostało dodane.'
          text2='Możesz nim zarzadzać z zakładki "Moje Konto".'
          onClick={() => setIsPopupActive(false)}
        />
      )}
    </PageWrapper>
  );
};

export default AddProducer;
