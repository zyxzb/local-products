'use client';

import { CustomButton, InputField, Popup } from '@/components';
import { BiMailSend } from 'react-icons/bi';
import { Formik, Form, FormikHelpers } from 'formik';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { contactFormSchema } from '@/utils/validationSchemas';

export interface ContactFormProps {
  name: string;
  email: string;
  message?: string;
  password?: string;
}

const initialValues = {
  name: '',
  email: '',
  message: '',
};

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);
  const [isPopupActive, setIsPopupActive] = useState(false);

  const handleSubmit = async (
    values: ContactFormProps,
    actions: FormikHelpers<ContactFormProps>,
  ) => {
    const { name, email, message } = values;
    setIsSending(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { name, email, message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setIsPopupActive(true);
      actions.resetForm();
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
        onSubmit={handleSubmit}
        validationSchema={contactFormSchema}
      >
        {() => (
          <Form className='flex flex-col w-full gap-4'>
            <InputField name='name' placeholder='Imię...' />
            <InputField name='email' placeholder='Email...' />
            <InputField
              name='message'
              placeholder='Twoja wiadomość'
              extraStyles='h-[200px]'
              isMessage
            />
            <CustomButton
              type='submit'
              text={isSending ? 'Wysyłanie...' : 'Wyślij'}
              icon={<BiMailSend className='text-xl' />}
            />
          </Form>
        )}
      </Formik>
      {isPopupActive && (
        <Popup
          text1='Gratulacje! - Twoja wiadomość została wysłana.'
          text2='Skontaktujemy się z Tobą tak szybko jak to możliwe.'
          onClick={() => setIsPopupActive(false)}
        />
      )}
    </>
  );
};

export default ContactForm;
