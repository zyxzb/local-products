import * as Yup from 'yup';

export const contactFormSchema = Yup.object().shape({
  name: Yup.string().required('Pole imię jest wymagane'),
  email: Yup.string()
    .required('Pole email jest wymagane')
    .email('Nieprawidłowy adres email'),
  message: Yup.string().required('Pole wiadomość jest wymagane'),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string().required('Pole imię jest wymagane'),
  email: Yup.string()
    .required('Pole email jest wymagane')
    .email('Nieprawidłowy adres email'),
  password: Yup.string().required('Hasło jest wymagane'),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Pole email jest wymagane')
    .email('Nieprawidłowy adres email'),
  password: Yup.string().required('Hasło jest wymagane'),
});
