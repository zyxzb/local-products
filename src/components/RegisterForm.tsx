'use client';

import { useState } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import { CustomButton, InputField, Popup } from '@/components';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { ContactFormProps } from '@/types';
import { registerSchema } from '@/utils/validationSchemas';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = () => {
  const [error, setError] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isPopupActive, setIsPopupActive] = useState(false);

  const handleRegister = async (
    values: ContactFormProps,
    actions: FormikHelpers<ContactFormProps>,
  ) => {
    const { name, email, password } = values;
    setIsSending(true);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (res.status === 201) {
        setIsPopupActive(true);
        actions.resetForm();
      }
      res.status === 500 &&
        alert('Podany adres email już istnieje w bazie danych');
    } catch (error) {
      setError(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleRegister}
        validationSchema={registerSchema}
      >
        {() => (
          <Form className='flex flex-col w-full gap-4 text-darkColor'>
            <InputField name='name' placeholder='Imię...' />
            <InputField name='email' placeholder='Email...' />
            <InputField
              name='password'
              placeholder='Hasło...'
              type='password'
            />
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
      {isPopupActive && (
        <Popup
          text1='Gratulacje! - Twoje konto zostało utworzone'
          text2='Możesz się zalogować!'
          onClick={() => setIsPopupActive(false)}
        />
      )}
    </>
  );
};

export default RegisterForm;
