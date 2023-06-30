'use client';

import { Form, Formik } from 'formik';
import { CustomButton, InputField } from '@/components';
import { validationSchema } from '@/utils';
import { AiOutlineUserAdd } from 'react-icons/ai';

const initialValues = {
  email: '',
  password: '',
};

const RegisterForm = () => {
  const handleRegister = () => {};

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleRegister}
      validationSchema={validationSchema}
    >
      {() => (
        <Form className='flex flex-col w-full gap-4 text-darkColor'>
          <InputField name='email' placeholder='Email...' />
          <InputField name='password' placeholder='Hasło...' type='password' />
          <CustomButton
            text='Zarejestruj się'
            type='submit'
            icon={<AiOutlineUserAdd className='text-2xl' />}
          />
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
