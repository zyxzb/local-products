'use client';

import { Form, Formik } from 'formik';
import { CustomButton, InputField } from '@/components';
import { validationSchema } from '@/utils';
import { AiOutlineLogin } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from 'next-auth/react';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const handleLogin = () => {};

  return (
    <div className='flex flex-col'>
      <Formik
        initialValues={initialValues}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        {() => (
          <Form className='flex flex-col w-full gap-4 mb-4 text-darkColor'>
            <InputField name='email' placeholder='Email...' />
            <InputField
              name='password'
              placeholder='Hasło...'
              type='password'
            />
            <CustomButton
              text='Zaloguj się'
              type='submit'
              icon={<AiOutlineLogin className='text-2xl' />}
            />
          </Form>
        )}
      </Formik>
      <CustomButton
        text='Zaloguj z Google'
        type='button'
        onClick={() => signIn('google')}
        icon={<FcGoogle className='text-2xl' />}
      />
    </div>
  );
};

export default LoginForm;
