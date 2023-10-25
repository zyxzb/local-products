'use client';

import { Form, Formik } from 'formik';
import { CustomButton, InputField } from '@/components';
import { AiOutlineLogin } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from 'next-auth/react';
import { loginSchema } from '@/utils/validationSchemas';
import { toast } from 'react-toastify';

interface LoginFormProps {
  email: string;
  password: string;
}

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const handleLogin = async (values: LoginFormProps) => {
    signIn('credentials', { ...values, redirect: false }).then((callback) => {
      if (callback?.ok) {
        toast.success('Zalogowano');
      }
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  return (
    <div className='flex flex-col'>
      <Formik
        initialValues={initialValues}
        onSubmit={handleLogin}
        validationSchema={loginSchema}
      >
        {() => (
          <Form className='flex flex-col w-full gap-4 mb-4'>
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
