'use client';

import {
  Loader,
  PageTitle,
  CustomLink,
  PageWrapper,
  InputField,
  CustomButton,
  Popup,
} from '@/components';
import { Form, Formik, FormikHelpers } from 'formik';
import { useSession } from 'next-auth/react';
import { AiOutlineLogin } from 'react-icons/ai';
import { useState } from 'react';
import { BiMailSend } from 'react-icons/bi';
import { CreateAdProps } from '@/types';
import { adSchema } from '@/utils/validationSchemas';

const initialValues = {
  title: '',
  desc: '',
  location: '',
  content: '',
};

const AddProducer = () => {
  const [isSending, setIsSending] = useState(false);
  const [isPopupActive, setIsPopupActive] = useState(false);
  const session = useSession();

  const handleCreateAd = async (
    values: CreateAdProps,
    actions: FormikHelpers<CreateAdProps>,
  ) => {
    const { title, desc, location, content } = values;
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
          // add images later
        }),
      });
      actions.resetForm();
      setIsPopupActive(true);
    } catch (error) {
      alert(`Something went wrong :( \n Error: ${error} \n Try again!`);
    } finally {
      setIsSending(false);
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
      <Formik
        initialValues={initialValues}
        onSubmit={handleCreateAd}
        validationSchema={adSchema}
      >
        {() => (
          <Form className='flex flex-col w-full gap-4 text-darkColor'>
            <InputField name='title' placeholder='Tytuł...' />
            <InputField name='desc' placeholder='Krótki opis...' />
            <InputField name='location' placeholder='Miejscowość...' />
            <InputField
              name='content'
              placeholder='Treść ogłoszenia...'
              extraStyles='h-[200px]'
              isMessage
            />
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
