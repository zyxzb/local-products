'use client';

import {
  InputField,
  CustomButton,
  Popup,
  AddProducerLabelWrapper,
  SelectLocation,
} from '@/components';

import { useState } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import { CreateAdProps } from '@/types';
import { useSession } from 'next-auth/react';
import { useCreateAdContext } from '@/context/createAddContext';
import { adSchema } from '@/utils/validationSchemas';
import { BiMailSend } from 'react-icons/bi';

const initialValues = {
  title: '',
  desc: '',
  content: '',
};

const CreateAdForm = () => {
  const [isSending, setIsSending] = useState(false);
  const [isPopupActive, setIsPopupActive] = useState(false);
  const { images, setImages, location, setLocation, coord } =
    useCreateAdContext();

  const session = useSession();

  const handleCreateAd = async (
    values: CreateAdProps,
    actions: FormikHelpers<CreateAdProps>,
  ) => {
    const { title, desc, content } = values;
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
          coord,
        }),
      });
      setIsPopupActive(true);
      actions.resetForm();
      setImages([]);
      setLocation('');
    } catch (error) {
      alert(`Something went wrong :( \n Error: ${error} \n Try again!`);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
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
            <AddProducerLabelWrapper text='Wybierz najblizszą dostępną lokalizacje z listy.'>
              <SelectLocation />
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
    </>
  );
};

export default CreateAdForm;
