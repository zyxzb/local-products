'use client';

import {
  InputField,
  CustomButton,
  AddProducerLabelWrapper,
} from '@/components';

import { useState } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import { useCreateAdContext } from '@/context/createAddContext';
import { adSchema } from '@/utils/validationSchemas';
import { BiMailSend } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import axios from 'axios';

interface CreateAdProps {
  title: string;
  content: string;
}

const initialValues = {
  title: '',
  content: '',
};

const CreateAdForm = () => {
  const [isSending, setIsSending] = useState(false);
  const { images, setImages, location, setLocation, coord } =
    useCreateAdContext();
  // add later different location component and claudinary instead of uploadthings

  const router = useRouter();

  const handleCreateAd = async (
    values: CreateAdProps,
    actions: FormikHelpers<CreateAdProps>,
  ) => {
    const { title, content } = values;
    setIsSending(true);

    axios
      .post('/api/listings', {
        title,
        content,
        images,
        location,
        coord,
      })
      .then(() => {
        toast.success('Dodano ogłoszenie!');
        actions.resetForm();
        router.refresh();
      })
      .catch(() => toast.error('Cos poszło nie tak'))
      .finally(() => setIsSending(false));
  };

  return (
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
  );
};

export default CreateAdForm;
