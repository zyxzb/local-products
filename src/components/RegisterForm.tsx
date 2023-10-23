'use client';

import { useState } from 'react';
import axios from 'axios';
import { Form, Formik, FormikHelpers } from 'formik';
import { CustomButton, InputField } from '@/components';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { ContactFormProps } from '@/types';
import { registerSchema } from '@/utils/validationSchemas';
import { toast } from 'react-toastify';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = () => {
  const [error, setError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleRegister = async (
    values: ContactFormProps,
    actions: FormikHelpers<ContactFormProps>,
  ) => {
    setIsSending(true);

    axios
      .post('/api/register', values)
      .then(() => {
        toast.success('Success, You can login now!');
        actions.resetForm();
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        toast.error(error.message);
      })
      .finally(() => setIsSending(false));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleRegister}
      validationSchema={registerSchema}
    >
      {() => (
        <Form className='flex flex-col w-full gap-4'>
          <InputField name='name' placeholder='Imię...' />
          <InputField name='email' placeholder='Email...' />
          <InputField name='password' placeholder='Hasło...' type='password' />
          <CustomButton
            type='submit'
            text={isSending ? 'Trwa rejestracja...' : 'Zarejestruj się'}
            icon={<AiOutlineUserAdd className='text-2xl' />}
          />
          {error && (
            <p className='text-center'>
              Coś poszło nie tak 😥 - spróbuj jeszcze raz!
            </p>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
