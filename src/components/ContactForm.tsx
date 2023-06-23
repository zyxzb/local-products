'use client';

import { Button, InputField } from '@/components';
import { BiMailSend } from 'react-icons/bi';
import { Formik, Form, FormikHelpers } from 'formik';
import { validationSchema } from '@/utils';
import { ContactFormProps } from '@/types';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

const ContactForm = () => {
  const handleSubmit = async (
    values: ContactFormProps,
    actions: FormikHelpers<ContactFormProps>,
  ) => {
    const { name, email, message } = values;
    try {
      alert('Form has been sent successfully sent');
      actions.resetForm();
      console.log(name, email, message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {() => (
        <Form className='flex flex-col w-full gap-4 text-darkColor'>
          <InputField name='name' placeholder='Imię...' />
          <InputField name='email' placeholder='Email...' />
          <InputField
            name='message'
            placeholder='Twoja wiadomość'
            extraStyles='h-[200px]'
            isMessage
          />
          <Button
            type='submit'
            text='Wyślij'
            extraStyles='hover:border-darkColor'
            icon={<BiMailSend className='text-xl' />}
          />
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
