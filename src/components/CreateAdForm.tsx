'use client';

import { InputField, CustomButton, FormSectionWrapper } from '@/components';

import { useState } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import { useCreateAdContext } from '@/context/createAddContext';
import { adSchema } from '@/utils/validationSchemas';
import { BiMailSend } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import axios from 'axios';
import { capitalizeFirstLetter } from '@/utils/helpers';

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

  const router = useRouter();

  const handleCreateAd = async (
    values: CreateAdProps,
    actions: FormikHelpers<CreateAdProps>,
  ) => {
    let { title, content } = values;

    title = capitalizeFirstLetter(title.trim());
    content = capitalizeFirstLetter(content.trim());

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
        setImages([]);
        setLocation('');
        router.push('/twoje-konto');
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
          <FormSectionWrapper text='3. Dodaj tytuł ogłoszenia'>
            <InputField name='title' placeholder='Tytuł...' />
          </FormSectionWrapper>
          <FormSectionWrapper text='4. Dodaj treść ogłoszenia'>
            <InputField
              name='content'
              placeholder='Treść ogłoszenia...'
              extraStyles='h-[200px]'
              isMessage
            />
          </FormSectionWrapper>
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
